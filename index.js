const express = require('express');

const chalk = require('chalk');

const http = require('http');

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`);
})
