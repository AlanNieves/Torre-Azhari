const { inc } = require('./metrics');

function metricsMiddleware(req, res, next) {
  res.on('finish', () => {
    if (req._honeypotHit) inc('honeypotHits');
    if (req._threatBlocked) inc('threatBlocked');
    if (res.statusCode === 429) inc('threatRateLimited');
  });

  next();
}

module.exports = metricsMiddleware;
