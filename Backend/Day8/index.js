const express = require("express");
const app = express();
const body_parser = require("body-parser");
const bodyParser = require("body-parser");

//Declaring Middlewares
const check = (req, res, next) => {
  res.status(500).send("Carnage Bhaimya");
  if (req.query.admin === 'true') {
    next();
  }
  else {
    res.status(400).send("Access Denied");
  }
};

const send = (req, res) => {
  res.status(200);
  res.json(req.query)
};

app.use(check);
app.get('/', send);
app.get("/ab+cd", (req, res) => {
  res.send(req.query);
  res.send('Hello');
  console.log(req.query);
});
app.post('/'(req, res) => {
  console.log('req.body->', req.body);
})
app.listen(5000);