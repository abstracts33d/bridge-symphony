var express = require('express');
var router = express.Router();

var datafr={
  title: 'Bridge Symphony',
  dat: 'Votre commande a été anulée',
  lang:'1',
}

var dataen={
  title: 'Bridge Symphony',
  dat: 'Your order has been cancelled',
  lang:'2',
}

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.session.lang) {req.session.lang=1;}
  if (req.query.lang) {req.session.lang=req.query.lang}
  if (req.session.lang==1) {res.render('payment_cancelled', datafr);}
  if (req.session.lang==2) {res.render('payment_cancelled', dataen);}
});

module.exports = router;
