// my-webapp/app/server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hii! Welcome to DevOpsDay Kerala!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
