const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
  content: { type: String, required: true },
  sentiment: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Journal', journalSchema);
