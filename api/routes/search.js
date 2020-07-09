const express = require('express');
const router = express.Router();
router.get('/', function (req, res) {
  res.status(200).json({ msg: 'Welcome to search router' });
});

router.get('/:id', function (req, res) {
  res.status(200).json({ msg: 'Individual Search Router' });
});

router.get('/test/:id', function (req, res) {
  res.status(200).json({ msg: 'new router test' });
});

module.exports = router;
