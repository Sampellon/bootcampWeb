const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Obtener todos los mensajes
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: 1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener mensajes' });
  }
});

module.exports = router;
