import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/client';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  console.log('Session', JSON.stringify(session, null, 2));

  if (session) {
    return res.status(200).json({ data: session });
  } else {
    return res.status(401).json({ data: 'Unauthorized' });
  }
};

export default handler;
