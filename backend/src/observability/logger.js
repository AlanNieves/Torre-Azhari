const pino = require('pino');

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  base: {
    service: 'azhary-backend',
    env: process.env.NODE_ENV || 'development'
  },
  timestamp: () => `,"time":"${new Date().toISOString()}"`,
});

module.exports = logger;