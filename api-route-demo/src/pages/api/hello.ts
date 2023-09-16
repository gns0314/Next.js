// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  /*
    1. 메일 전송
    2. 데이터베이스 접근
    3. CORS 문제를 우회할 떄
  */
  // const response = await fetch ('blog.com/res');
  // const json = await response.json();
  res.status(200).json({ name: 'John Doe' })
}
