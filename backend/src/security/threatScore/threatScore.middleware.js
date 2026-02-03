const crypto = require('crypto');
const { getThreat } = require('./threatScore.store');
const { evaluateThreat } = require('./threatScore.engine');
const { logSecurityEvent } = require('../../observability/audit.logger');
const { inc } = require('../../observability/metrics');
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
    inc('threatBlocked');
    logSecurityEvent({
      category: 'threat-score',
      action: 'BLOCK',
      fingerprint,
      score: threat.score,
    });

    return res.status(403).json({
      error: 'Access denied'
    });
  }

  if (decision.action === 'RATE_LIMIT') {
    inc('threatRateLimited');
    logSecurityEvent({
      category: 'threat-score',
      action: 'RATE_LIMIT',
      fingerprint,
      score: threat.score
    });
  }

  next();
}

/**
 * ✅ EXPORT CORRECTO (ESTO ERA LO QUE FALTABA)
 */
module.exports = threatScoreMiddleware;
