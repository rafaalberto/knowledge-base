const express = require('express')();

express.get('/', (req, res) => {
    res.send('<h2>Hello Node.js</h2>');
});

const port = 2000;
express.listen(port, ()=> console.log(`Listening on port ${port}`));