//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
//const mongoose = require('mongoose');

const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.use(express.json());

app.get("/", function(req, res) {
  res.render("index");
});

app.post("/", (req, res) => {

  const name = req.body.Name;
  const email = req.body.Email;
  const subject = req.body.Subject;
  const message = req.body.Message;


  res.render("index");

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
