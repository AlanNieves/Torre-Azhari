const express = require('express');               
const leadRoutes = require('./modules/leads/lead.routes');

// 🔎 Metrics (observability)
const { snapshot } = require('./observability/metrics');

const router = express.Router();

/**
 * ─────────────────────────────
 * Healthcheck
 * ─────────────────────────────
 */
router.get('/health', (req, res) => {
  res.json({ ok: true });
});

/**
 * ─────────────────────────────
 * Rutas públicas reales
 * ─────────────────────────────
 */
router.use('/leads', leadRoutes);

/**
 * ─────────────────────────────
 * Rutas internas (NO públicas)
 * Solo disponibles fuera de producción
 * ─────────────────────────────
 */
if (process.env.NODE_ENV !== 'production') {
  router.get('/internal/metrics', (req, res) => {
    res.json(snapshot());
  });
}

module.exports = router;
