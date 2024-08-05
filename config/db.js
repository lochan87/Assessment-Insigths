const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;

const client = new MongoClient(mongoURI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

const connectDB = async () => {
    try {
        await client.connect();
        console.log("Successfully connected to MongoDB!");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = { connectDB, client };