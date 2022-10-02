import { NextApiRequest, NextApiResponse } from 'next';
import * as cheerio from 'cheerio';
import { unstable_getServerSession } from 'next-auth';
import {
  deleteNewLine,
  getData,
  getNoteData,
  getTableData,
} from '../../util/scrapeDataUtils';
import type { SavingsAccountType } from '../../types/savingsAccountsTypes';
import { getBankTag } from '../../util/prepareDataUtils';
import { prisma } from '../../db/client';
import { authOptions } from './auth/[...nextauth]';

const url = 'https://www.mesec.cz';
const fetchUrl =
  url +
  '/produkty/sporici-ucty/?vyse_vkladu=50000&vypovedni_lhuta=0&doba_ulozeni=365&_sl1=pasmove_uroceni&_sl2=prehled_urokovych_sazeb&_sl3=zpusob_pripisovani_uroku&tridit=_calc1&smer=s';

// TODO: add note

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    try {
      const response = await fetch(fetchUrl);
      const htmlString = await response.text();
      const $ = cheerio.load(htmlString);

      const tableValues: Array<SavingsAccountType> = [];
      const tableURLS: Array<string> = [];

      $('.product', htmlString).each((_, el) => {
        let rowValues: SavingsAccountType = {
          name: '',
          tag: '',
          type: '',
          interestAfterTax: 0,
          interestRateFreq: '',
          table: [],
          rangeInterest: '',
          // note: '',
        };

        rowValues.name = getData($, el, ['td:nth-child(1)', 'div', 'small']);
        rowValues.tag = getBankTag(rowValues.name);
        rowValues.type = getData($, el, ['td:nth-child(1)', 'div', 'a']);
        // rowValues.note = getNoteData($, el, 'td:nth-child(2)');
        rowValues.rangeInterest = getData($, el, 'td:nth-child(2)');
        rowValues.interestAfterTax = parseFloat(
          getData($, el, 'td:nth-child(5)')
            .slice(0, -2)
            .replace(/\s/g, '')
            .replace(',', '.')
        );

        rowValues.interestRateFreq = getData($, el, 'td:nth-child(4)');

        tableURLS.push(url + getData($, el, ['td:nth-child(3)', 'a'], 'link'));

        tableValues.push(rowValues);
      });

      let lastCheck = deleteNewLine($('.design-bar--editors-footer').text());
      lastCheck = lastCheck.substring(0, lastCheck.indexOf('Redakce'));

      // Data doesnt exist on the fetched page
      if (tableValues.length === 0) {
        return res.status(500).json({
          error: 'Internal server error',
        });
      }

      // // Fetch table data
      for (let i = 0; i < tableURLS.length; i++) {
        tableValues[i].table = (await getTableData(tableURLS[i])) || [];
      }

      // // Save data to database
      await prisma.savingsAccounts.create({
        data: { list: tableValues, lastCheck },
      });

      return res.status(200).json({
        message: 'Data scraped and saved successfully.',
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'Internal server error',
      });
    }
  } else {
    return res.status(401).json({ data: 'Unauthorized' });
  }
};

export default handler;
