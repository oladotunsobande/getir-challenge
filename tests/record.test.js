const request = require('supertest');
const expect = require('expect');

const server = require('../src/app');
const mock = require('./mock');

describe('Records test', () => {
  
  it("should create new customer", (done) => {
    request(server)
      .post('/v1/records/list')
      .send(mock.customer)
      .expect(200)
      .expect((res) => {
        expect(res.body.success).toBe(true);
        expect(res.body.message).toBe('Signup successful');
      })
      .end((err, res) => {
        if(err) return done(err);

        done();
      });
  });

});