const express = require('express');
const router = express.Router();
const { addCategory, getCategories } = require('../controllers/categoryController');
const { addEntry, getEntries } = require('../controllers/entryController');



router.post('/add-category', addCategory);
router.get('/get-all-categories', getCategories);

router.post('/add-entry', addEntry);
router.get('/get-all-entries', getEntries);





module.exports = router;