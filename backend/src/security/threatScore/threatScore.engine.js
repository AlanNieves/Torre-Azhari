const { getThreat, setThreat } = require('./threatScore.store');

const BLOCK_THRESHOLD = 50;
const RATE_LIMIT_THRESHOLD = 20;

function registerThreatHit({ fingerprint, score = 10 }) {
  const threat = getThreat(fingerprint);
  const now = Date.now();

  threat.score += score;
  threat.lastHit = now;

  if (threat.score >= BLOCK_THRESHOLD) {
    threat.blockedUntil = now + 24 * 60 * 60 * 1000;
  }

  setThreat(fingerprint, threat);

  return evaluateThreat(threat);
}

function evaluateThreat(threat) {
  if (threat.blockedUntil && threat.blockedUntil > Date.now()) {
    return { action: 'BLOCK' };
  }

  if (threat.score >= RATE_LIMIT_THRESHOLD) {
    return { action: 'RATE_LIMIT' };
  }

  return { action: 'ALLOW' };
}

module.exports = {
  registerThreatHit,
  evaluateThreat
};
