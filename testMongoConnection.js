const { MongoClient } = require('mongodb');

// Replace the URI string with your MongoDB deployment's connection string.
const uri = process.env.MONGODB_URI || 'mongodb+srv://ismaielahmed230:mynewpass@cluster0.5pgijcb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' ;

async function testConnection() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Connected successfully to server");
  } catch (err) {
    console.error("Connection failed", err);
  } finally {
    await client.close();
  }
}

testConnection();
