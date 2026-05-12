const { Router } = require('express');
const { getQuestions } = require('../controllers/questionsController');

const router = Router();

// GET /api/questions?amount=10&category=9&difficulty=easy
router.get('/', getQuestions);

module.exports = router;
