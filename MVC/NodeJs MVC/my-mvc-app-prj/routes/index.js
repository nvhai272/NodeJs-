const express = require('express');
const router = express.Router();
const homeController = require("../app/controllers/homeController");

//Routes for home
router.get('/', homeController.get);

module.exports = router;