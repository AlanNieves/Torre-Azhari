const crypto = require('crypto');

function getClientIp(req) {
  return (
    req.headers['cf-connecting-ip'] ||
    req.headers['x-real-ip'] ||
    req.headers['x-forwarded-for']?.split(',')[0] ||
    req.ip ||
    'unknown'
  );
}

function generateFingerprint(req) {
  const raw = [
    getClientIp(req),
    req.headers['user-agent'],
    req.headers['accept-language']
  ].join('|');

  return crypto
    .createHash('sha256')
    .update(raw)
    .digest('hex');
}

function sanitizeBody(body) {
  if (!body) return null;

  const clone = { ...body };
  const SENSITIVE_KEYS = [
    'password',
    'token',
    'accessToken',
    'refreshToken',
    'authorization'
  ];

  for (const key of SENSITIVE_KEYS) {
    if (clone[key]) clone[key] = '[REDACTED]';
  }

  return clone;
}

function logHoneypotHit(req, meta = {}) {
  const logEntry = {
    type: 'HONEYPOT_HIT',
    timestamp: new Date().toISOString(),

    source: {
      ip: getClientIp(req),
      fingerprint: generateFingerprint(req),
      userAgent: req.headers['user-agent'] || 'unknown',
      referer: req.headers.referer || null
    },

    request: {
      method: req.method,
      path: req.originalUrl,
      query: req.query || {},
      body: sanitizeBody(req.body)
    },

    meta: {
      severity: 'high',
      score: meta.score || 10,
      reason: meta.reason || 'honeypot endpoint accessed'
    }
  };

  console.warn('[HONEYPOT]', JSON.stringify(logEntry));
}

module.exports = {
  logHoneypotHit
};
