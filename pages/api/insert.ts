import { NowRequest, NowResponse } from '@vercel/node'
import { connectToDatabase } from '../../utils/connectdb';

export default async (request: NowRequest, response: NowResponse) => {
  const { username } = request.body;

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection('subscribe_username');

  await collection.insertOne({
    username,
    subscribedAt: new Date(),
  })

  return response.status(201).json({ ok: true });
}