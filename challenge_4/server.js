const express = require('express');
const app = express();
const port= 3000;
const path = require('path');

//middleware to direct server to client folder
app.use('/', express.static(path.join(__dirname, '/client/dist')));

//get request
app.get('/playConnect', (req, res) => {

  res.send('Hello Server!');
})

//port listener
app.listen(port, () => console.log(`app is listening on port ${port}!`));

