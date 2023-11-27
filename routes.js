const express = require('express');
const User = require('./user');
const Bill = require('./bill');

const router = express.Router();

// Create a new Bill
router.post('/bills', async (req, res) => {
  console.log(req.body)
  const { name, fatherhusbandname, phone, address, sno, billdate, chargetype, amount } = req.body;

  try {
    const bill = new Bill({ name, fatherhusbandname, phone, address, sno, billdate, chargetype, amount });
    await bill.save();
    res.send(bill);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get all bills
router.get('/bills', async (req, res) => {
  try {
    const bills = await Bill.find({});
    res.send(bills);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Delete a bill
router.delete('/bills/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const bill = await Bill.findByIdAndDelete(id);
    res.send(bill);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Create a new user
router.post('/users', async (req, res) => {
  console.log(req.body)
  const { name, fatherhusbandname, phone, address } = req.body;

  try {
    const user = new User({ name, fatherhusbandname, phone, address });
    await user.save();
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get max sno
router.get('/billsmax', async (req, res) => {
  try {
    const maxsno = await Bill.find({}).sort({"sno":-1}).limit(1);
    console.log(maxsno)
    res.send(maxsno);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Update a user
router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, fatherhusbandname, phone, address } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, { name, fatherhusbandname, phone, address}, { new: true });
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Delete a user
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;