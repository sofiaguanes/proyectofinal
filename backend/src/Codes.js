const express = require('express');
const Code = require('../models/Code');

const router = express.Router();

// Obtener todos los códigos
router.get('/', async (req, res) => {
  const codes = await Code.find();
  res.json(codes);
});

// Agregar un nuevo código
router.post('/', async (req, res) => {
  const newCode = new Code(req.body);
  await newCode.save();
  res.status(201).json(newCode);
});

module.exports = router;
