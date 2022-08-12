import { NextApiRequest, NextApiResponse } from 'next';
import * as cheerio from 'cheerio';
import { deleteNewLine, getData } from '../../util/scrapeDataUtils';
import type { RowValueType } from '../../types/investmentTypes';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    tableValues: [
      {
        bank: {
          name: 'UniCredit Bank',
          type: 'Účet START, OPEN, TOP',
          link: 'https://www.mesec.cz/produkty/sporici-ucty/ucet-start-open-top-unicredit-bank/',
          imageUrl: 'https://i.iinfo.cz/images/243/unicredit-1-thumb.png',
        },
        initialValue: '0 Kč',
        interestRate: '5,5 %',
        card: 'ano',
        interestAfterTax: '2 388,24 Kč',
      },
    ],
  };

  return res.status(200).json({
    tableValues: data,
  });
};

export default handler;
