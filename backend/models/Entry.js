const mongoose = require('mongoose');

const enrtySchema = new mongoose.Schema({
  text: { type: String, required: true },
  mood: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Entry = mongoose.model('Entry', enrtySchema);

module.exports = Entry;