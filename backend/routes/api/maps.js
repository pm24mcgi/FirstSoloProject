const router = require('express').Router();
const { googleAPIKey } = require('../../config');

router.post('/key', (req, res) => {
  res.json({ googleAPIKey });
});

module.exports = router;
