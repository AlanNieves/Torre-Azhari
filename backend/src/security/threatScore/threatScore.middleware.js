const crypto = require('crypto');
const { getThreat } = require('./threatScore.store');
const { evaluateThreat } = require('./threatScore.engine');

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

function threatScoreMiddleware(req, res, next) {
  const fingerprint = generateFingerprint(req);
  const threat = getThreat(fingerprint);
  const decision = evaluateThreat(threat);

  if (decision.action === 'BLOCK') {
    // 🔥 Marca para saltar rateLimit
    req._threatBlocked = true;

    return res.status(403).json({
      error: 'Access denied'
    });
  }

  if (decision.action === 'RATE_LIMIT') {
    res.setHeader('Retry-After', '60');
    return res.status(429).json({
      error: 'Too many requests'
    });
  }

  next();
}

/**
 * ✅ EXPORT CORRECTO (ESTO ERA LO QUE FALTABA)
 */
module.exports = threatScoreMiddleware;
