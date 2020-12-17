const express = require('express');
const router = express.Router();

// Controller
const { createCategory } = require('../controllers/category.controllers.js');

router.post('/category', createCategory);

module.exports = router;
