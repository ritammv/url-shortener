/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Url = require('../models/url');

const databaseName = 'test';

let urlObject;

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${databaseName}`;
  await mongoose.connect(url, { useNewUrlParser: true });
  urlObject = new Url({
    urlCode: 'sausage',
    longUrl: 'https://www.howtographql.com/vue-apollo/0-introduction/',
    dateCreated: new Date(),
    shortUrl: 'http://localhost:3001/sausage',
    datesAccessed: [],
  });
  return urlObject.save();
});

test('urlObject should be defined', () => {
  expect(urlObject).toBeDefined();
});
test('url should have a URL code', () => {
  expect(urlObject.urlCode).toBeDefined();
});
test('url should have a short code which is equal to sausage', () => {
  expect(urlObject.urlCode).toEqual('sausage');
});
test('urlObject should have short url', () => {
  expect(urlObject.shortUrl).toEqual(
    `http://localhost:3001/${urlObject.urlCode}`
  );
});
