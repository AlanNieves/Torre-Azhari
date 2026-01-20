const express = require('express');               // Express core
const cors = require('cors');                     // Middleware CORS

const rateLimit = require('./middlewares/rateLimit'); // Anti-spam global
const errorHandler = require('./middlewares/errorHandler'); // Manejador global de errores
const routes = require('./routes');               // Rutas /api

const app = express();                            // Crea instancia de Express

app.use(cors());                                  // Permite requests desde frontend (dominio/puerto distinto)
app.use(express.json({ limit: '1mb' }));          // Parsea JSON y limita tamaño (evita abuso)
app.use(rateLimit);                               // Aplica rate limit a todas las rutas

app.use('/api', routes);                          // Monta todas las rutas bajo /api

app.use(errorHandler);                            // Al final: captura errores de arriba

module.exports = app;                             // Exporta app para que server.js la arranque
