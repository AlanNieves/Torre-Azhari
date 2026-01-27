const honeypotMiddleware = require('./honeypot.middleware');
const { logHoneypotHit } = require('./honeypot.logger');

module.exports = {
  honeypotMiddleware,
  logHoneypotHit
};
