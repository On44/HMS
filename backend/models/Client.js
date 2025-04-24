const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  contact: { type: String, required: true },
  programs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Program' }],
});

module.exports = mongoose.model('Client', clientSchema);