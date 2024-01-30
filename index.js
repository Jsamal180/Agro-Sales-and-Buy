const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/mongodb');

const port = 8000;

// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})