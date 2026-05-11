require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  triviaApi: {
    baseUrl: process.env.TRIVIA_API_BASE_URL,
    timeout: parseInt(process.env.TRIVIA_API_TIMEOUT) || 5000,
  },
};

// Validación temprana: si falta algo crítico, el proceso no arranca
if (!config.triviaApi.baseUrl) {
  throw new Error('TRIVIA_API_BASE_URL no está definida en el archivo .env');
}

module.exports = config;