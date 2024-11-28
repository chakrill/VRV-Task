const express = require('express');
const router = express.Router();

// Mock controller function (replace with actual logic)
const loginHandler = (req, res) => {
  res.send('Login endpoint');
};

// Define routes
router.post('/login', loginHandler); // Add a proper handler
router.post('/register', (req, res) => {
  res.send('Register endpoint');
});

module.exports = router;
