const express = require('express');

const rateLimit = require('./middlewares/rateLimit');
const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes');

const tarpitMiddleware = require('./security/tarpit/tarpit.middleware');

// 🔐 Security core
const securityHeaders = require('./security/securityHeaders.middleware');
const corsMiddleware = require('./security/cors.middleware');

// 🚨 IMPORTACIÓN DIRECTA (SIN index.js)
const threatScoreMiddleware = require('./security/threatScore/threatScore.middleware');
const honeypotMiddleware = require('./security/honeypot/honeypot.middleware');

const app = express();

// 🔍 DEBUG - Solo en desarrollo
if (process.env.NODE_ENV !== 'production') {
  console.log('securityHeaders:', typeof securityHeaders);
  console.log('corsMiddleware:', typeof corsMiddleware);
  console.log('rateLimit:', typeof rateLimit);
  console.log('threatScoreMiddleware:', typeof threatScoreMiddleware);
  console.log('honeypotMiddleware:', typeof honeypotMiddleware);
}

app.use(express.json({ limit: '1mb' }));

// 🔐 Seguridad (orden correcto)
app.use(securityHeaders);
app.use(corsMiddleware);
app.use(threatScoreMiddleware);
app.use(tarpitMiddleware);
app.use(rateLimit);
app.use(honeypotMiddleware);

// 🚀 Rutas reales
app.use('/api', routes);

// ❗ Error handler
app.use(errorHandler);

module.exports = app;
