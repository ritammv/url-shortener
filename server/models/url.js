const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  dateCreated: { type: String, default: Date.now },
  // datesAccessed: [String],
});

// TODO: every time request made update push the date.now to the dates accessed array

module.exports = mongoose.model('url', urlSchema);
