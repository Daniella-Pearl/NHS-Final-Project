const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
  inputFirstName: {
    type: String,
    trim: true,
  },
  inputLastName: {
    type: String,
    trim: true,
  },
  inputEmail: {
    type: String,
    trim: true,
  },
  inputPhone: {
    type: Number,
    trim: true,
  },
  inputNIN: {
    type: String,
    trim: true,
  },
  inputRole: {
    type: String,
  },
  inputPassword : {
    type: String,
    trim:false
  }
});

module.exports = mongoose.model('Register', registerSchema);