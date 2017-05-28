var express = require('express');
var router = express.Router();

var Mailer = require('../core/Mailer'); //require this module
var mail = new Mailer();

var datafr={
  title: 'Bridge Symphony',
  active:'contact',
  lang:'1',
}

var dataen={
  title: 'Bridge Symphony',
  active:'contact',
  lang:'2',
}

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.session.lang) {req.session.lang=1;}
  if (req.query.lang) {req.session.lang=req.query.lang}

  if ( (req.query.name) && (req.query.email) && (req.query.message) ){
    //console.log(mail);

    mail.createTransporter();
    var mail_sent = mail.send(
      {
        from: req.query.email,
        to: "contact@bridgesymphony.com",
        subject: req.query.name,
        text: req.query.message
      }
    );

    if(mail_sent==1) {
      if (req.session.lang==1) {res.send('Votre message a bien été envoyé');}
      if (req.session.lang==2) {res.send('Your mail has been sent');}
    };

    if(mail_sent==0) {
      if (req.session.lang==1) {res.send('Oups une erreur est survenue Veuillez svp recommencer');}
      if (req.session.lang==2) {res.send('Oops an error occured please try again');}
    };
  }

  else if (req.session.lang==1) {res.render('contact', datafr);}
  else if (req.session.lang==2) {res.render('contact', dataen);}

});

module.exports = router;
