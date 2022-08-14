import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    list: [
      {
        name: 'UniCredit Bank',
        type: 'Účet START, OPEN, TOP',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/ucet-start-open-top-unicredit-bank/',
        initialValue: '0 Kč',
        interestRate: '5,5 %',
        interestAfterTax: '2 388,24 Kč',
        card: 'ano',
      },
    ],
  };

  try {
    const savings = await prisma.savingsAccounts.create({
      data,
    });

    res.status(200).json(savings);
  } catch (error) {}

  return res.status(200).json({
    tableValues: data,
  });
};

export default handler;
