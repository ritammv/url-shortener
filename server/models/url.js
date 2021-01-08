const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  dateCreated: { type: String, default: Date.now() },
  clickCounter: Array,
});

module.exports = mongoose.model('url', urlSchema);
