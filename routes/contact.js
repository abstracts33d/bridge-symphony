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
  if (req.session.lang==1) {res.render('contact', datafr);}
  if (req.session.lang==2) {res.render('contact', dataen);}

  if ( (req.query.name) && (req.query.email) && (req.query.message) ){
    //console.log(mail);

    mail.createTransporter();
    mail.send(
      {
        from: req.query.email,
        to: "contact@bridgesymphony.com",
        subject: req.query.name,
        text: req.query.message
      }
    );
  }

});

module.exports = router;
