const questionsService = require('../services/questionsService');

const getQuestions = async (req, res, next) => {
  try {
    const { amount, category, difficulty } = req.query;

    // Validación de parámetros
    if (!amount) {
      return res.status(400).json({
        success: false,
        message: 'El parámetro "amount" es requerido',
      });
    }

    const params = {
      amount: parseInt(amount),
    };

    if (category) params.category = parseInt(category);
    if (difficulty) params.difficulty = difficulty;

    const questions = await questionsService.getQuestions(params);

    res.status(200).json({
      success: true,
      total: questions.length,
      data: questions,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getQuestions };
