var express = require('express');
var router = express.Router();

var datafr={
  title: 'Bridge Symphony',
  active:'home',
  lang:'1',

  carousel_h1_1:'Un support didactique pour l\'enseignement du bridge.',
  carousel_p_1:'',
  carousel_caption_1:'',

  carousel_h1_2:'Un outil de travail pour bridgeur de tout niveau.',
  carousel_p_2:'',
  carousel_caption_2:'',

  carousel_h1_3:'',
  carousel_p_3:'',
  carousel_caption_3:'',
}

var dataen={
  title: 'Bridge Symphony',
  active:'home',
  lang:'2',

  carousel_h1_1:'blablabla',
  carousel_p_1:'',
  carousel_caption_1:'',

  carousel_h1_2:'blablabablalb',
  carousel_p_2:'',
  carousel_caption_2:'',

  carousel_h1_3:'',
  carousel_p_3:'',
  carousel_caption_3:'',
}

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.session.lang) {req.session.lang=1;}
  if (req.query.lang) {req.session.lang=req.query.lang}
  if (req.session.lang==1) {res.render('index', datafr);}
  if (req.session.lang==2) {res.render('index', dataen);}
});

module.exports = router;
