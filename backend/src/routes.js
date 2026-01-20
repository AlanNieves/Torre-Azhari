const express = require('express');               // Express para router global
const leadRoutes = require('./modules/leads/lead.routes'); // Importa rutas del módulo leads

const router = express.Router();                  // Crea router principal

router.get('/health', (req, res) =>               // Endpoint de salud para monitoreo
  res.json({ ok: true })                          // Respuesta simple
);

router.use('/leads', leadRoutes);                 // Monta leads en /api/leads

module.exports = router;                          // Exporta router para app.js
