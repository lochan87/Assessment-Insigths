const express = require('express');
const { getData } = require('../controllers/dataController');

const router = express.Router();

router.get('/CIA-I', async (req, res) => {
    try {
        const usn = req.query.usn || '1DS22IS001'; // Default value
        await getData('CIA-I', usn, res);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// router.get('/CIA-I', async (req, res) => await getData('CIA-I', res));
router.get('/CIA-II', async (req, res) => await getData('CIA-II', res));
router.get('/CIA-III', async (req, res) => await getData('CIA-III', res));
router.get('/Final', async (req, res) => await getData('Final', res));
router.get('/DS', async (req, res) => await getData('DS', res));
router.get('/Maths', async (req, res) => await getData('Maths', res));
router.get('/LD', async (req, res) => await getData('LD', res));
router.get('/OS', async (req, res) => await getData('OS', res));
router.get('/PP', async (req, res) => await getData('PP', res));
router.get('/RD', async (req, res) => await getData('RD', res));
router.get('/Graphs1', async (req, res) => await getData('Graphs1', res));
router.get('/Graphs2', async (req, res) => await getData('Graphs2', res));
router.get('/Graphs3', async (req, res) => await getData('Graphs3', res));
router.get('/DVLab', async (req, res) => await getData('DVLab', res));
router.get('/LDLab', async (req, res) => await getData('LDLab', res));
router.get('/OSLab', async (req, res) => await getData('OSLab', res));
router.get('/DSLab', async (req, res) => await getData('DSLab', res));

module.exports = router;