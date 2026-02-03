// Evita spam y ataques básicos a endpoints
const rateLimit = require('express-rate-limit');

const leadRateLimit = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutos
  limit: 5,                // 5 requests por IP
  standardHeaders: true,   // RateLimit-* headers
  legacyHeaders: false,    // sin headers legacy

  /**
   * 🔥 Bypass de rate limit para amenazas ya bloqueadas
   * ThreatScore tiene prioridad absoluta
   */
  skip: (req) => {
    return req._threatBlocked === true;
  },

  handler: (req, res) => {
    return res.status(429).json({
      success: false,
      error: {
        code: 'RATE_LIMIT_EXCEEDED',
        message: 'Demasiadas solicitudes. Intenta más tarde.',
      },
    });
  },
});

module.exports = leadRateLimit;
