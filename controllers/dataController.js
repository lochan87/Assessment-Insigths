// // controllers/dataController.js
// const { getUSN } = require('../store/store');
// const { client } = require('../config/db');
// const db = client.db("AssessmentInsights");

// const getData = async (collectionName, res) => {
//     try {
//         const usn = getUSN();  // Get the updated USN
//         const data = await db.collection(collectionName).findOne({ USN: usn });
//         res.status(200).send(data);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// };

// module.exports = { getData };

const { getDB } = require('../config/db');

const getData = async (collectionName, usn, res) => {
    const db = getDB();
    const projection = { _id: 0 }; // Specify the fields you need

    try {
        const data = await db.collection(collectionName).findOne({ USN: usn }, { projection });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getData };
