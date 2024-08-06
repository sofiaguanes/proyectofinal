const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Code = require('./models/Code'); // Asegúrate de tener un modelo Code definido

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/codes', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.get('/api/codes', async (req, res) => {
    try {
        const codes = await Code.find();
        res.json(codes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/codes', async (req, res) => {
    const code = new Code({
        title: req.body.title,
        code: req.body.code
    });
    try {
        const newCode = await code.save();
        res.status(201).json(newCode);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
