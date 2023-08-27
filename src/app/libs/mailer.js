const dotenv = require("dotenv");
const nodemailer = require('nodemailer');

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.gmailusername,
    pass: process.env.gmailappPassword,
  },
});

module.exports = transporter;
