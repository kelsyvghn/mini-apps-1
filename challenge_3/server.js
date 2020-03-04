const express = require('express');
const app = express();
const port = 3000;
// const babel = require("@babel/core").transform("code", options);

app.get('/', (req, res) => {
    res.send("Hello New World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));