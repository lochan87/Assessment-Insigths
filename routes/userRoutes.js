// // routes/userRoutes.js
// const express = require('express');
// const { updateUSN } = require('../controllers/userController'); // Ensure this path and function are correct

// const router = express.Router();

// router.post('/usn', updateUSN); // This should correctly use the imported `updateUSN` function

// module.exports = router;

const express = require('express');
const router = express.Router();

router.post('/usn', async (req, res) => {
    try {
        const { usn } = req.body;
        if (!usn) {
            return res.status(400).json({ error: 'USN is required' });
        }
        // Assuming you want to set the USN globally or per session, you might need to use some global variable or session management
        global.currentUSN = usn; // Simple example, consider a better state management for production
        res.status(200).json({ message: 'USN updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
