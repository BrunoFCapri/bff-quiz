const { Router } = require('express');
const { getCategories } = require('../controllers/categoryController');

const router = Router();

// GET /api/categories
router.get('/', getCategories);

module.exports = router;
