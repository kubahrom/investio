import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    list: [
      {
        name: 'UniCredit Bank',
        type: 'Účet START, OPEN, TOP',
        interestRate: '5,5 %',
        interestAfterTax: '2 388,24 Kč',
        table: [
          {
            range: '0 – 200000',
            value: '4.5%',
          },
          {
            range: '200001 – 1000000',
            value: '0.1%',
          },
          {
            range: '1000001 – 10000000',
            value: '0.15%',
          },
          {
            range: '10000001 – neomezeno',
            value: '0.2%',
          },
        ],
      },
    ],
  };

  try {
    const savings = await prisma.savingsAccounts.create({
      data: data.list,
    });

    return res.status(200).json({ message: 'Saved successfully.' });
  } catch (error) {
    return res.status(200).json({
      tableValues: data,
    });
  }
};

export default handler;
