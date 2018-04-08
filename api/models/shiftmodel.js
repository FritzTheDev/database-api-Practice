const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShiftSchema = new Schema({
  full_name: {
    type: String,
  },
  clock_in: {
    type: String,
  },
  clock_out: {
    type: String,
  },
  shift_date: {
    type: Date,
  },
  lunch_taken: {
    type: String,
  }
});

module.exports = mongoose.model('Shifts', ShiftSchema);
