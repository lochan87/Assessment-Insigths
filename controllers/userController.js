// controllers/userController.js
const { setUSN } = require('../store/store');

const updateUSN = async (req, res) => {
    const { parcel } = await req.body;
    setUSN(parcel);
    res.status(200).send({ usn: parcel });
};

module.exports = { updateUSN };
