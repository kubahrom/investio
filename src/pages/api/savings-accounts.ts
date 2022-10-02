import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await prisma.savingsAccounts.findFirst({
      orderBy: {
        id: 'desc',
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
