var express = require('express');
var router = express.Router();

var datafr={
  title: 'Bridge Symphony',
  dat: 'Votre commande a bien été recue, vous recevrez un email de confirmation de Paypal dans quelques instants.',
  lang:'1',
}

var dataen={
  title: 'Bridge Symphony',
  dat: 'Your order has been processed, your will receive a confirmation mail from Paypal shortly',
  lang:'2',
}

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.session.lang) {req.session.lang=1;}
  if (req.query.lang) {req.session.lang=req.query.lang}
  if (req.session.lang==1) {res.render('payment_succes', datafr);}
  if (req.session.lang==2) {res.render('payment_succes', dataen);}
});

module.exports = router;
