//jshint esversion:6

const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: "",
    domain: ""
  }
};

const transporter = nodemailer.createTransport(mailgun(auth));

const mailOption = {
  from: "yonik12@gmail.com",
  to: 'yonik12@gmail.com',
  subject: "asdasd",
  text: "Asdasd"
};

transporter.sendMail(mailOption, function(err,data){
  if(err){
    console.log("Error");
  } else {
    console.log("Message send!!!");
  }
});
