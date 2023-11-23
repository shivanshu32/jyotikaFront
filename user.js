const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  fatherhusbandname: String,
  phone: Number,
  address: String,
  time : { type : Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;