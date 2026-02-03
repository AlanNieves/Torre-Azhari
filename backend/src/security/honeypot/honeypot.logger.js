const crypto = require('crypto');
const { logSecurityEvent } = require('../../observability/audit.logger');

/**
 * Extrae la IP real considerando proxies / Cloudflare
 */
function getClientIp(req) {
  return (
    req.headers['cf-connecting-ip'] ||
    req.headers['x-real-ip'] ||
    (req.headers['x-forwarded-for'] && req.headers['x-forwarded-for'].split(',')[0]) ||
    req.ip ||
    'unknown'
  );
}

/**
 * Genera fingerprint estable del atacante
 */
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

/**
 * Sanitiza body para evitar guardar datos sensibles
 */
function sanitizeBody(body) {
  if (!body || typeof body !== 'object') return null;

  const clone = { ...body };
  const SENSITIVE_KEYS = [
    'password',
    'token',
    'accessToken',
    'refreshToken',
    'authorization'
  ];

  for (const key of SENSITIVE_KEYS) {
    if (key in clone) {
      clone[key] = '[REDACTED]';
    }
  }

  return clone;
}

/**
 * 🔥 Logger principal de Honeypot
 * Nunca debe lanzar errores
 */
function logHoneypotHit(req, meta = {}) {
  try {
    const ip = getClientIp(req);
    const fingerprint = generateFingerprint(req);

    const safeMeta = {
      score: meta.score || 0,
      reason: meta.reason || 'honeypot endpoint accessed'
    };

    const logEntry = {
      type: 'HONEYPOT_HIT',
      timestamp: new Date().toISOString(),

      source: {
        ip,
        fingerprint,
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
        ...safeMeta
      }
    };

    /**
     * 🧾 Audit / SIEM log (best effort)
     */
    if (typeof logSecurityEvent === 'function') {
      logSecurityEvent({
        category: 'honeypot',
        ip,
        fingerprint,
        path: req.originalUrl,
        score: safeMeta.score,
        reason: safeMeta.reason
      });
    }

    /**
     * 🔎 Debug local (no crítico)
     */
    console.warn('[HONEYPOT]', JSON.stringify(logEntry));

  } catch (err) {
    // ⚠️ Nunca romper el flujo por logging
    console.error('[HONEYPOT_LOGGER_ERROR]', err.message);
  }
}

module.exports = {
  logHoneypotHit
};
