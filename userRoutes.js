const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/admin', protect(['Admin']), (req, res) => {
  res.send('Admin content');
});

router.get('/user', protect(['User', 'Admin']), (req, res) => {
  res.send('User content');
});

module.exports = router;
