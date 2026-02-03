const threatScoreMiddleware = require('./threatScore.middleware');
const { registerThreatHit } = require('./threatScore.engine');
const {
  getThreat,
  setThreat,
  resetThreat
} = require('./threatScore.store');

module.exports = {
  threatScoreMiddleware,
  registerThreatHit,
  getThreat,
  setThreat,
  resetThreat
};
