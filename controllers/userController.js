// controllers/userController.js
const { setUSN } = require('../store/store');

const updateUSN = (req, res) => {
    const { parcel } = req.body;
    setUSN(parcel);
    res.status(200).send({ usn: parcel });
};

module.exports = { updateUSN };
