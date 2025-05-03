const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ message: 'Username requerido' });
  }
  res.status(200).json({ username });
});

module.exports = router;
