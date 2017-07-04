const express = require('express');
const supertest = require('supertest');

const routes = require('./routes');

const app = express();
app.use(routes);

describe('GET /', () => {
  it('should respond with \'rep!\'', () => {
    return supertest(app)
      .get('/')
      .expect(200)
      .then(response => {
        expect(response.text).to.be.eql('rep!')
      });
  });
});

describe('GET /health', () => {
  it('should respond with \'healthy!\'', () => {
    return supertest(app)
      .get('/health')
      .expect(200)
      .then(response => {
        expect(response.text).to.be.eql('healthy!')
      });
  });
});