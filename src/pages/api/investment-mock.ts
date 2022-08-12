import { NextApiRequest, NextApiResponse } from 'next';
import * as cheerio from 'cheerio';
import { deleteNewLine, getData } from '../../util/scrapeDataUtils';
import type { RowValueType } from '../../types/investmentTypes';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = [
    {
      bank: {
        name: 'Československá obchodní banka, a. s.',
        type: 'Duo Profit (s investováním)',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/duo-profit-csob/',
        imageUrl: 'https://i.iinfo.cz/images/286/csob-1-thumb.png',
      },
      initialValue: '30 000 Kč',
      interestRate: '4,5 %',
      card: 'ne',
      interestAfterTax: '1 946,39 Kč',
    },
  ];

  return res.status(200).json({
    tableValues: data,
  });
};

export default handler;
