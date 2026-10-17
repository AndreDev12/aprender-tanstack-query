// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// an simple endpoint for geting current list
let list = ['Item 1', 'Item 2', 'Item 3'];

export default async (
  req: NextApiRequest,
  res: NextApiResponse<typeof list>,
) => {
  const { add, clear } = req.query;

  if (typeof add === 'string' && add) {
    if (!list.includes(add)) {
      list.push(add);
    }
  } else if (clear) {
    list = [];
  }

  await new Promise((r) => setTimeout(r, 1000));

  res.json(list);
};
