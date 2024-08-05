// controllers/dataController.js
const { getUSN } = require('../store/store');
const { client } = require('../config/db');
const db = client.db("AssessmentInsights");

const getData = async (collectionName, res) => {
    try {
        const usn = getUSN();  // Get the updated USN
        const data = await db.collection(collectionName).findOne({ USN: usn });
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { getData };
