// routes/products.js

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
