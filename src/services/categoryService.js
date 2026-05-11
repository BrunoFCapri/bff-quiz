
const apiClient = require('./apiClient');

const getAllCategories = async () => {
  const response = await apiClient.get('/api_category.php');

  return response.data.trivia_categories;

};


module.exports  = { getAllCategories };