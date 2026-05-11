const axios = require('axios');
const config = require('../config/env');

const apiClient = axios.create({
  baseURL: config.triviaApi.baseUrl,
  timeout: config.triviaApi.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

module.exports = apiClient;
