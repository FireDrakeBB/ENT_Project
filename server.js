
const express = require('express');
const bodyParser = require("body-parser");

const app = express()
const port = 5000;

var users = [];

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  next();
});

app.use(bodyParser.json())

app.post('/sign-in', function (req, res) {
  var data = req.body;
  console.log(req);
  let {username} = data, {password} = data;
  for (var user in users) {
    if (user.username == username && user.password == password) {
      res.json({
        "status": "Successfully signed in"
      });
      break;
    }
  }
  
  res.json({
    "status": "Username and password error"
  });
})

app.post('/sign-up', function (req, res) {
  var data = req.body;
  let {username} = data, {password} = data;
  users.push({
   username, password
  });
  res.json({
    "status": "Thank you for signing up"
  });
})

app.listen(port);