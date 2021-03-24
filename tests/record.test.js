const request = require('supertest');
const expect = require('expect');

const server = require('../src/server');
const mock = require('./mock');

describe('Records test', () => {

  it("should fail when startDate is greater than endDate", (done) => {
    request(server)
      .post('/v1/records/list')
      .send(mock.payloadWithStartDateGreaterThanEndDate)
      .expect(400)
      .expect((res) => {
        expect(res.body.code).toBe(-1);
      })
      .end((err, res) => {
        if(err) return done(err);

        done();
      });
  });

  it("should fail when startDate is equal to endDate", (done) => {
    request(server)
      .post('/v1/records/list')
      .send(mock.payloadWithSameStartDateAndEndDate)
      .expect(400)
      .expect((res) => {
        expect(res.body.code).toBe(-1);
      })
      .end((err, res) => {
        if(err) return done(err);

        done();
      });
  });

  it("should fail when startDate is empty", (done) => {
    request(server)
      .post('/v1/records/list')
      .send(mock.payloadWithEmptyStartDate)
      .expect(400)
      .expect((res) => {
        expect(res.body.code).toBe(-1);
      })
      .end((err, res) => {
        if(err) return done(err);

        done();
      });
  });

  it("should fail when startDate is a number", (done) => {
    request(server)
      .post('/v1/records/list')
      .send(mock.payloadWithDatesInNumberFormat)
      .expect(400)
      .expect((res) => {
        expect(res.body.code).toBe(-1);
      })
      .end((err, res) => {
        if(err) return done(err);

        done();
      });
  });

  it("should fail when endDate is empty", (done) => {
    request(server)
      .post('/v1/records/list')
      .send(mock.payloadWithEmptyEndDate)
      .expect(400)
      .expect((res) => {
        expect(res.body.code).toBe(-1);
      })
      .end((err, res) => {
        if(err) return done(err);

        done();
      });
  });

  it("should fail when startDate is missing", (done) => {
    request(server)
      .post('/v1/records/list')
      .send(mock.missingStartDatePayload)
      .expect(400)
      .expect((res) => {
        expect(res.body.code).toBe(-1);
      })
      .end((err, res) => {
        if(err) return done(err);

        done();
      });
  });

  it("should fail when endDate is missing", (done) => {
    request(server)
      .post('/v1/records/list')
      .send(mock.missingEndDatePayload)
      .expect(400)
      .expect((res) => {
        expect(res.body.code).toBe(-1);
      })
      .end((err, res) => {
        if(err) return done(err);

        done();
      });
  });

  it("should fail when maxCount is missing", (done) => {
    request(server)
      .post('/v1/records/list')
      .send(mock.missingMaxCountPayload)
      .expect(400)
      .expect((res) => {
        expect(res.body.code).toBe(-1);
      })
      .end((err, res) => {
        if(err) return done(err);

        done();
      });
  });

  it("should fail when minCount is missing", (done) => {
    request(server)
      .post('/v1/records/list')
      .send(mock.missingMinCountPayload)
      .expect(400)
      .expect((res) => {
        expect(res.body.code).toBe(-1);
      })
      .end((err, res) => {
        if(err) return done(err);

        done();
      });
  });

  it("should fail when minCount is greater than maxCount", (done) => {
    request(server)
      .post('/v1/records/list')
      .send(mock.payloadWithMinCountGreaterThanMaxCount)
      .expect(400)
      .expect((res) => {
        expect(res.body.code).toBe(-1);
      })
      .end((err, res) => {
        if(err) return done(err);

        done();
      });
  });

  it("should fail when minCount is equal to maxCount", (done) => {
    request(server)
      .post('/v1/records/list')
      .send(mock.payloadWithSameMinCountAndMaxCount)
      .expect(400)
      .expect((res) => {
        expect(res.body.code).toBe(-1);
      })
      .end((err, res) => {
        if(err) return done(err);

        done();
      });
  });

  it("should retrieve records with valid payload", (done) => {
    request(server)
      .post('/v1/records/list')
      .send(mock.validPayload)
      .expect(200)
      .expect((res) => {
        expect(res.body.code).toBe(0);
        expect(res.body.msg).toBe('Success');
        expect(Array.isArray(res.body.records)).toBe(true);
      })
      .end((err, res) => {
        if(err) return done(err);

        done();
      });
  });

});