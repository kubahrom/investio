import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

// TODO: dynamically get last scaped one

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await prisma.savingsAccounts.findUnique({
      where: {
        id: '6303b78a9de99c993946d9c3',
      },
    });

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: 'Internal server error',
    });
  }
};

export default handler;
