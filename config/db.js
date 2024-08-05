// const { MongoClient, ServerApiVersion } = require('mongodb');
// require('dotenv').config();

// const mongoURI = process.env.MONGO_URI;

// const client = new MongoClient(mongoURI, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     },
// });

// const connectDB = async () => {
//     try {
//         await client.connect();
//         console.log("Successfully connected to MongoDB!");
//     } catch (error) {
//         console.error(error);
//         process.exit(1);
//     }
// };

// module.exports = { connectDB, client };

const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

let db;

const connectDB = async () => {
    if (db) return db; // Return the existing connection if already connected

    const client = new MongoClient(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    await client.connect();
    db = client.db('AssessmentInsights');
    console.log('Successfully connected to MongoDB!');
    return db;
};

const getDB = () => {
    if (!db) throw new Error('Database not connected!');
    return db;
};

module.exports = { connectDB, getDB };