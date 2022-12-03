var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'hotmail',
    //secureConnection: false,
    //port: 587,
    auth: {
      user: 'piranhaAlert@hotmail.com',
      pass: 'Nr?EMz3SG8$tEyTP'
    }
  });

  var mailOptions = {
    from: 'piranhaAlert@hotmail.com',
    to: 'hassawells@gmail.com, samgsmith98@gmail.com',
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