const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8000', // Tutaj zmieniłem port na 8000, gdzie powinno być Twoje API
      changeOrigin: true,
    })
  );
};
