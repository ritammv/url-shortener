/* eslint-disable no-undef */
const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');

const request = supertest(app);

const databaseName = 'test';

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${databaseName}`;
  await mongoose.connect(url, { useNewUrlParser: true });
});

it(' should send long Url', async (done) => {
  await request
    .post('/api')
    .send({
      longUrl:
        'https://itnext.io/build-a-project-management-software-with-vue-js-and-apollo-part1-d12ee75a7641',
      urlCode: 'hello',
    })
    .expect(200);
  done();
});

it('Should create short URL and save to database', async (done) => {
  const res = await request.post('/api').send({
    longUrl:
      'https://itnext.io/build-a-project-management-software-with-vue-js-and-apollo-part1-d12ee75a7641',
    urlCode: 'hello',
  });
  done();
});

it('should error if accessing / route', async (done) => {
  const response = await request.get('/');
  expect(response.status).toBe(404);
  done();
});
