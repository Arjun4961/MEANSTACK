var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '030cm305@gmail.com',
    pass: 'Anusha@4961'
  }
});

var mailOptions = {
  from: '030cm305@gmail.com',
  to: 'lovelyarjun3821@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});