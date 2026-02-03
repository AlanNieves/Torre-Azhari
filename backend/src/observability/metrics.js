const metrics = {
  honeypotHits: 0,
  threatBlocked: 0,
  threatRateLimited: 0,
  tarpitDelays: 0
};

function inc(metric) {
  if (metrics[metric] !== undefined) {
    metrics[metric]++;
  }
}

function snapshot() {
  return {
    ...metrics,
    timestamp: new Date().toISOString()
  };
}

module.exports = {
  inc,
  snapshot
};
