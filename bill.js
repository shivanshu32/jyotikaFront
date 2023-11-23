const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  id: String,
  name: String,
  fatherhusbandname: String,
  phone: Number,
  address: String,
  sno: String,
  chargetype: String,
  amount: Number,
  billdate: { type : Date },
  time : { type : Date, default: Date.now }
});

const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;