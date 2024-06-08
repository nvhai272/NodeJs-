// productRoutes.js
const express = require('express');
const router = express.Router();
const user = require('../models/User');

// Route để lấy tất cả sản phẩm
router.get('/', async (req, res) => {
  try {
    const users = await user.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Các tuyến đường khác cho sản phẩm

module.exports = router;
