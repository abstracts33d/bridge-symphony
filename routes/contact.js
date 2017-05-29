var express = require('express');
var router = express.Router();

var Mailer = require('../core/Mailer'); //require this module
var mail = new Mailer();

var datafr={
  title: 'Bridge Symphony',
  active:'contact',
  lang:'1',
  title:"Contactez Nous",
  contact_text: "Contactez nous en remplissant le formulaire de contact ou en visitant nos reseaux sociaux comme Facebook ou Twitter",
  name_field:"Nom",
  msg_field:"Votre Message",
  snd_msg_field:"Envoyer",
  social_sites:"Nos Reseaux Sociaux"
}

var dataen={
  title: 'Bridge Symphony',
  active:'contact',
  lang:'2',
  title:"Contact Us",
  contact_text:"Feel free to shout us by filing the contact form or visiting our social network sites like Fackebook or Twitter.",
  name_field:"Name",
  msg_field:"Your Message",
  snd_msg_field:"Send Message",
  social_sites:"Our Social Sites"
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
