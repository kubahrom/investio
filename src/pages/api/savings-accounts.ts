import { NextApiRequest, NextApiResponse } from 'next';
import * as cheerio from 'cheerio';
import { getData, getTableData } from '../../util/scrapeDataUtils';
import type { SavingsAccountType } from '../../types/investmentTypes';
import { PrismaClient } from '@prisma/client';

const url = 'https://www.mesec.cz';
const fetchUrl =
  url +
  '/produkty/sporici-ucty/?vyse_vkladu=50000&vypovedni_lhuta=0&doba_ulozeni=365&_sl1=max_dosazitelny_urok&_sl2=prehled_urokovych_sazeb&_sl3=poznamky';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch(fetchUrl);
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);

    const tableValues: Array<SavingsAccountType> = [];
    const tableURLS: Array<string> = [];

    $('.product', htmlString).each((_, el) => {
      let rowValues: SavingsAccountType = {
        name: '',
        type: '',
        interestRate: '',
        interestAfterTax: '',
        table: [],
      };

      rowValues.name = getData($, el, ['td:nth-child(1)', 'div', 'small']);
      rowValues.type = getData($, el, ['td:nth-child(1)', 'div', 'a']);
      const interestRate = getData($, el, 'td:nth-child(2)');
      rowValues.interestRate = interestRate.replace(/\%.*/, '%');
      rowValues.interestAfterTax = getData($, el, 'td:nth-child(5)');

      tableURLS.push(url + getData($, el, ['td:nth-child(3)', 'a'], 'link'));

      tableValues.push(rowValues);
    });

    // Data doesnt exist on the fetched page
    if (tableValues.length === 0) {
      return res.status(500).json({
        error: 'Internal server error',
      });
    }

    // Fetch table data
    for (let i = 0; i < tableURLS.length; i++) {
      tableValues[i].table = (await getTableData(tableURLS[i])) || [];
    }

    // Save data to database
    await prisma.savingsAccounts.create({
      data: { list: tableValues },
    });

    return res.status(200).json({
      message: 'Data scraped and saved successfully.',
      // tableValues,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: 'Internal server error',
    });
  }
};

export default handler;
