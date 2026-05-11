const categoryService = require('../services/categoryService');

const getCategories = async (req, res, next) => {
  try {
    const categories = await categoryService.getAllCategories();

    res.status(200).json({
      success: true,
      total: categories.length,
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCategories };