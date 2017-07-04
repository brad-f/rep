const express = require('express');

const log = require('../lib/log');
const routes = require('./routes');

const app = express();
const PORT = 3000;

app.use(routes);

module.exports = () => {
  log.info( 'starting server');
  return app.listen(PORT, '0.0.0.0', () => {
    log.info({ port: PORT }, 'server started');
  });
};