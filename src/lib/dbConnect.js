import { MongoClient, ServerApiVersion } from 'mongodb'

export const collectinName={
    servicesCollection:'services',
    userCollections:'users'
}


export function dbConnect(collectionName) {
  const uri = process.env.MONGODB_URL;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.MONGODB_COLLECTION_NAME).collection(collectionName)
}
