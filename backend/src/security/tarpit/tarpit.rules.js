function getDelayForThreat(threat) {
    if(!threat || threat.score) return 0;

    if(threat.score >= 40) return 5000;
    if(threat.score >= 30) return 3000;
    if(threat.score >= 20) return 1500;

    return 0;
}

module.exports = {
    getDelayForThreat
}