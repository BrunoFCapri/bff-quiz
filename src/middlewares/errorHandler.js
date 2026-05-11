const errorHandler = (err, req, res, _next) => {
  console.error(`[ERROR] ${err.message}`);

  // Error proveniente de Axios (API externa)
  if (err.response) {
    return res.status(err.response.status).json({
      success: false,
      message: 'Error al comunicarse con la API externa',
      detail: err.response.statusText,
    });
  }

  // Error de red (timeout, sin conexión)
  if (err.request) {
    return res.status(503).json({
      success: false,
      message: 'La API externa no está disponible. Intente más tarde.',
    });
  }

  // Error genérico de la aplicación
  res.status(500).json({
    success: false,
    message: err.message || 'Error interno del servidor',
  });
};

module.exports = errorHandler;