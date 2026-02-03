const crypto = require('crypto');
const { inc } = require('../../observability/metrics');
const { getThreat} = require('../threatScore/threatScore.store');
const { getDelayForThreat } = require('./tarpit.rules');


function generateFingerprint(req) {
    return crypto
        .createHash('sha256')
        .update(
            [
                req.ip,
                req.headers['user-agent'],
                req.headers['accept-language']
            ].join('|'))
            .digest('hex');
        
}

function tarpitMiddleware(req, res, next) {
    const fingerprint = generateFingerprint(req);
    const threat = getThreat(fingerprint);

    const delay = getDelayForThreat(threat);

    if(delay > 0) {
        inc('tarpitDelays'); 
        
        return setTimeout(() => {
            next();
        }, delay);
    }
    next();
}

module.exports = tarpitMiddleware;