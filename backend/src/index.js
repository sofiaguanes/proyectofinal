const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5001; // Asegúrate de que el puerto coincida con el que está configurado en el frontend

app.use(cors());
app.use(bodyParser.json());

let codes = [];

app.get('/api/codes', (req, res) => {
    res.json(codes);
});

app.post('/api/codes', (req, res) => {
    const code = req.body;
    codes.push(code);
    res.status(201).json(code);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
