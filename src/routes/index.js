const { Router } = require('express');
const categoryRoutes  = require('./categoryRoutes');
const questionsRoutes = require('./questionsRoutes');

const router = Router();

router.use('/categories', categoryRoutes);
router.use('/questions', questionsRoutes);

module.exports = router;
