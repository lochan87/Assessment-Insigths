const express = require('express');
const { getData } = require('../controllers/dataController');

const router = express.Router();

router.get('/CIA-I', (req, res) => getData('CIA-I', res));
router.get('/CIA-II', (req, res) => getData('CIA-II', res));
router.get('/CIA-III', (req, res) => getData('CIA-III', res));
router.get('/Final', (req, res) => getData('Final', res));
router.get('/DS', (req, res) => getData('DS', res));
router.get('/Maths', (req, res) => getData('Maths', res));
router.get('/LD', (req, res) => getData('LD', res));
router.get('/OS', (req, res) => getData('OS', res));
router.get('/PP', (req, res) => getData('PP', res));
router.get('/RD', (req, res) => getData('RD', res));
router.get('/Graphs1', (req, res) => getData('Graphs1', res));
router.get('/Graphs2', (req, res) => getData('Graphs2', res));
router.get('/Graphs3', (req, res) => getData('Graphs3', res));
router.get('/DVLab', (req, res) => getData('DVLab', res));
router.get('/LDLab', (req, res) => getData('LDLab', res));
router.get('/OSLab', (req, res) => getData('OSLab', res));
router.get('/DSLab', (req, res) => getData('DSLab', res));

module.exports = router;