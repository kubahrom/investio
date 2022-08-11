import { NextApiRequest, NextApiResponse } from 'next';
import * as cheerio from 'cheerio';
import { deleteNewLine, getData } from '../../util/scrapeDataUtils';
import type { RowValueType } from '../../types/investmentTypes';

const url = 'https://www.mesec.cz';
const fetchUrl = url + '/produkty/sporici-ucty';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch(fetchUrl);
    const htmlString = await response.text();

    const $ = cheerio.load(htmlString);

    const tableValues: Array<RowValueType> = [];

    $('.product', htmlString).each((_, el) => {
      let rowValues: RowValueType = {
        bank: { name: '', type: '', link: '', imageUrl: '' },
        initialValue: '',
        interestRate: '',
        card: '',
        interestAfterTax: '',
      };

      rowValues.bank.name = getData($, el, ['td:nth-child(1)', 'div', 'small']);
      rowValues.bank.type = getData($, el, ['td:nth-child(1)', 'div', 'a']);
      rowValues.bank.link =
        url + getData($, el, ['td:nth-child(1)', 'div', 'a'], 'link');

      rowValues.bank.imageUrl = getData(
        $,
        el,
        ['td:nth-child(1)', 'div', 'img'],
        'img'
      );
      rowValues.initialValue = getData($, el, 'td:nth-child(2)');
      rowValues.interestRate = getData($, el, 'td:nth-child(3)');
      rowValues.card = getData($, el, 'td:nth-child(4)');
      rowValues.interestAfterTax = getData($, el, 'td:nth-child(5)');

      tableValues.push(rowValues);
    });

    // Data doesnt exist on the fetched page
    if (tableValues.length === 0) {
      return res.status(500).json({
        error: 'Internal server error',
      });
    }

    return res.status(200).json({
      tableValues: tableValues,
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Internal server error',
    });
  }
};

export default handler;
