const apiClient = require('./apiClient');

const getQuestions = async (params) => {
  const response = await apiClient.get('/api.php', { params });

  return response.data.results;
};

module.exports = { getQuestions };
