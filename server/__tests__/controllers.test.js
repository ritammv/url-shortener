/* eslint-disable no-undef */
const mongoose = require('mongoose');
const { goToUrl, getStats } = require('../controllers/url.controller');

const Url = require('../models/url');

let urlObject;

const databaseName = 'test';

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

const req = {};
const res = {
  send: jest.fn(() => res).mockName('send'),
  status: jest.fn(() => res).mockName('status'),
  redirect: jest.fn(() => res).mockName('redirect'),
};

describe('goToUrl', () => {
  req.params = {
    code: 'sausage',
  };
  Url.findOne = jest.fn();
  Url.findOne.mockResolvedValue(urlObject);
  Url.updateOne = jest.fn();
  Url.updateOne.mockResolvedValue(urlObject);

  test('goToUrl should be called successfully', async () => {
    await goToUrl(req, res);
    expect(Url.findOne).toHaveBeenCalled();
    expect(Url.findOne).toHaveBeenCalledWith({ urlCode: 'sausage' });
    // expect(res.redirect.mock.calls.length).toEqual(1);
  });
});

describe('getStats', () => {
  req.params = {
    code: 'sausage',
  };
  Url.findOne = jest.fn();
  Url.findOne.mockResolvedValue(urlObject);

  test('getStats should be called successfully', async () => {
    await getStats(req, res);
    expect(Url.findOne).toHaveBeenCalled();
    expect(Url.findOne).toHaveBeenCalledWith({ urlCode: 'sausage' });
    // expect(res.status).toHaveBeenCalledWith(200);
    // expect(res.send).toHaveBeenCalledWith(urlObject);
  });
});
