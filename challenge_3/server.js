const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const babel = require("@babel/core");

babel.transform("code", optionsObject);
// const babel = require("@babel/core").transform("code", options);
app.use('/', express.static(path.join(__dirname, '/client'))); //point express to client folder to connect html
// app.use(express.json());

// app.use(express.urlencoded({ extended: false })) app.get('/', (req, res) => res.send('Hello World!'));

app.get('/', (req, res) => {
    res.send("Hello New World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));