// app.js
const express = require('express');
const app = express();
const port = 3005;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Node.js app listening at http://localhost:${port}`);
});
