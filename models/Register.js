const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose').default || require('passport-local-mongoose');

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
  }
});

registerSchema.plugin(passportLocalMongoose, {
  usernameField: 'inputEmail'
});

module.exports = mongoose.model('Register', registerSchema);