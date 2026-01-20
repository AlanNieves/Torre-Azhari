const express = require('express');               // Express para crear router
const { registerLead } = require('./lead.controller'); // Importa controller

const router = express.Router();                  // Router aislado para /leads

router.post('/', registerLead);                   // POST /api/leads → registra lead

module.exports = router;                          // Exporta router para montarlo en routes.js
