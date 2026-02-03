const crypto = require('crypto');
const { logHoneypotHit } = require('./honeypot.logger');
const { registerThreatHit } = require('../threatScore');
const { inc } = require('../../observability/metrics')
/**
 * Rutas trampa clásicas
 */
const HONEYPOT_PATHS = [
  '/wp-admin',
  '/.env',
  '/admin',
  '/phpmyadmin',
  '/api/admin',
  '/api/login'
];

function generateFingerprint(req) {
  return crypto
    .createHash('sha256')
    .update(
      [
        req.ip,
        req.headers['user-agent'],
        req.headers['accept-language']
      ].join('|')
    )
    .digest('hex');
}

function isHoneypotPath(req) {
  const path = req.path.toLowerCase().trim();

  return HONEYPOT_PATHS.some(honeypotPath =>
    path === honeypotPath ||
    path.startsWith(honeypotPath + '/') ||
    path.startsWith(honeypotPath + '.')
  );
}

function honeypotMiddleware(req, res, next) {
  if (!isHoneypotPath(req)) {
    return next();
  }

  const fingerprint = generateFingerprint(req);

  // 🔥 Log forense
  logHoneypotHit(req, {
    reason: 'honeypot endpoint accessed',
    score: 15
  });

  inc('honeypotHits');

  // 🔥 Incrementa ThreatScore
  registerThreatHit({
    fingerprint,
    score: 15
  });

  // 🎭 Respuesta fake
  return res.status(200).json({
    success: false,
    message: 'Service temporarily unavailable'
  });
}

module.exports = honeypotMiddleware;
