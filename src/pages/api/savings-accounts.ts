import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await prisma.savingsAccounts.findUnique({
      where: {
        id: '62f93037894f70af78749560',
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
