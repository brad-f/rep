const bunyan = require('bunyan');

let log;

const initialize = ({ name, command } = {}) => {
  log = bunyan.createLogger({ name, command });
  log.info('logger initialized');
};

module.exports = {
  initialize,
  info: function() { log.info.apply(log, arguments); },
  warn: function() { log.warn.apply(log, arguments); },
  error: function() { log.error.apply(log, arguments); },
  fatal: function() { log.fatal.apply(log, arguments); },
  child: function() { log.child.apply(log, arguments); },
};
