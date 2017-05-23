var express = require('express');
var router = express.Router();

var datafr={
  title: 'Bridge Symphony',
  active:'about',
  lang:'1',
}

var dataen={
  title: 'Bridge Symphony',
  active:'about',
  lang:'2',
}

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.session.lang) {req.session.lang=1;}
  if (req.query.lang) {req.session.lang=req.query.lang}
  if (req.session.lang==1) {res.render('about', datafr);}
  if (req.session.lang==2) {res.render('about', dataen);}
});

module.exports = router;
