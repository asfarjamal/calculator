const express = require('express');
const app = express();
const port = 3000;

app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const result = a + b;
    res.json({ result });
});

app.get('/subtract', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const result = a - b;
    res.json({ result });
});

app.get('/multiply', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const result = a * b;
    res.json({ result });
});

app.get('/divide', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    if (b === 0) {
        return res.status(400).json({ error: 'Division by zero' });
    }
    const result = a / b;
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Calculator API is running at http://localhost:${port}`);
});
