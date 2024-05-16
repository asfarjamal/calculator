const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/calculate', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const operation = req.query.operation;
    let result;
    
    switch (operation) {
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            if (b === 0) {
                return res.send('Division by zero is not allowed.');
            }
            result = a / b;
            break;
        default:
            return res.send('Invalid operation.');
    }
    
    res.send(`Result: ${result}`);
});

app.listen(port, () => {
    console.log(`Calculator app is running at http://localhost:${port}`);
});
