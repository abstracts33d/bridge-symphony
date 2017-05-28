var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var configMail = require('../bin/config').mail;//my json configurations mail

function Mailer(){
  this.nodemailer = nodemailer;
  this.transporter = this.createTransporter();
}

Mailer.prototype = {
  createTransporter: function() {
    return this.nodemailer.createTransport(smtpTransport({
        host: configMail.host, //mail.example.com (your server smtp)
        port: configMail.port, //2525 (specific port)
        secureConnection: configMail.secureConnection, //true or false
        auth: {
            user: configMail.auth.user, //user@mydomain.com
            pass: process.env.mail_contact_pwd //password from specific user mail
        }
    }));
  },

  send: function(mailOptions) {
    // send mail with defined transport object
    this.transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return 0;
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        return 1;
    });
  }
};

module.exports = Mailer;
