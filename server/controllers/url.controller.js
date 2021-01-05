const validUrl = require('valid-url');
const { nanoid } = require('nanoid');
const config = require('config');
const Url = require('../models/url');

exports.goToUrl = async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });
    if (url) {
      return res.redirect(url.longUrl);
    }
    return res.status(404);
  } catch (err) {
    console.error(err);
    return res.status(500).json('server error');
  }
};

exports.sendUrl = async (req, res) => {
  const { longUrl } = req.body;

  const BASE_URL = config.get('BASE_URL');

  if (!validUrl.isUri(BASE_URL)) {
    return res.status(401).json('Invalid Base Url');
  }

  const urlCode = nanoid(6);

  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });

      if (url) {
        res.json(url);
      } else {
        const shortUrl = `${BASE_URL}/${urlCode} `;
        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });

        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json('Server Error');
    }
  } else {
    res.status(401).json('Invalid Long URL');
  }
};
