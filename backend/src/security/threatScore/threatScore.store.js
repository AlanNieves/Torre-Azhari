const store = new Map();

function getThreat(fingerprint) {
  return store.get(fingerprint) || {
    score: 0,
    lastHit: null,
    blockedUntil: null
  };
}

function setThreat(fingerprint, data) {
  store.set(fingerprint, data);
}

function resetThreat(fingerprint) {
  store.delete(fingerprint);
}

module.exports = {
  getThreat,
  setThreat,
  resetThreat
};
