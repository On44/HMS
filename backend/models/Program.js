const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
});

module.exports = mongoose.model('Program', programSchema);