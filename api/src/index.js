"use strict";
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.text({ type: 'text/html' }));
app.get('/', async ({ req, res }) => {
    console.log(req);
    res.send('howdy');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
