// routes/userRoutes.js
const express = require('express');
const { updateUSN } = require('../controllers/userController'); // Ensure this path and function are correct

const router = express.Router();

router.post('/usn', updateUSN); // This should correctly use the imported `updateUSN` function

module.exports = router;
