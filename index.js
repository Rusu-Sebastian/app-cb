const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
    // res.sendFile(path.join(__dirname, 'public', 'style.css'));
    // res.sendFile(path.join(__dirname, 'public', 'script.js'));`
});

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/')));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
