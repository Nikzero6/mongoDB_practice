const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    await client.db("fruitsDB").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const insertDocuments = async function (db) {
  const fruits = db.collection("friuits");

  // create an array of documents to insert

  const docs = [
    { name: "cake", healthy: false },

    { name: "lettuce", healthy: true },

    { name: "donut", healthy: false },
  ];

  // this option prevents additional documents from being inserted if one fails

  const options = { ordered: true };

  const result = await fruits.insertMany(docs, options);

  console.log(`${result.insertedCount} documents were inserted`);
};
