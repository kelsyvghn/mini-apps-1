const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '/client'))); //point express to client folder to connect html
app.get('/', (req, res) => res.send('Hello World!'));

app.post('/', (req, res) => {
  res.send('this submission has been sent');
  // res.end()
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));