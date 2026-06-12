const express = require('express');

const {
  chatWithAI,
} = require('../controllers/aiController');

const router = express.Router();

// AI Chat Route
router.post('/chat', chatWithAI);

module.exports = router;