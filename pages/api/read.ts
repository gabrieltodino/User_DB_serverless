import { NowRequest, NowResponse } from '@vercel/node'
import { connectToDatabase } from '../../utils/connectdb';

export default async (request: NowRequest, response: NowResponse) => {

    const db = await connectToDatabase(process.env.MONGODB_URI);

    const collectionData = db.collection('subscribe_username');

    let data = collectionData.find({}).project({_id: 0, subscribedAt: 0})
    let dataformated = await data.toArray()

    return response.json(dataformated);
}