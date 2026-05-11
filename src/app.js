const express = require('express');
const logger       = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const routes       = require('./routes/index');

const app = express();

// --- Middlewares globales ---
app.use(express.json());
app.use(logger);

// --- Rutas del BFF ---
app.use('/api', routes);

// --- Health check ---
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// --- Manejo de rutas no encontradas ---
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Ruta no encontrada.' });
});

// --- Error handler (siempre al final) ---
app.use(errorHandler);

module.exports = app;
