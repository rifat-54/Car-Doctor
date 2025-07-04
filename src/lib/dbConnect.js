import { MongoClient, ServerApiVersion } from 'mongodb'

export const collectinName={
    servicesCollection:'services',
    userCollections:'users',
    bookingCollections:'booked'
}


export function dbConnect(collectionName) {
  const uri = process.env.NEXT_PUBLIC_MONGODB_URL;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.MONGODB_COLLECTION_NAME).collection(collectionName)
}
