const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '/client'))); //point express to client folder to connect html
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => res.send('Hello World!'));

app.post('/user', (req, res) => {
  console.log(req.body);

  res.send(req.body);
  // res.end()
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

