
const logger = require('./logger');

function logSecurityEvent(event){
    logger.warn({ 
        type: 'SECURITY_EVENT',
        ...event
     });
}

module.exports = {
    logSecurityEvent
}