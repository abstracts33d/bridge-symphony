var express = require('express');
var router = express.Router();

var datafr={
  title: 'Bridge Symphony',
  active:'home',
  lang:'1',

  carousel_h1_1:'Bridge Symphony le meilleur atout des bridgeurs',
  carousel_p_1:'',
  carousel_caption_1:'En Savoir Plus',

  carousel_h1_2:'Un support didactique pour l\'enseignement du bridge.',
  carousel_p_2:'',
  carousel_caption_2:'En Savoir Plus',

  carousel_h1_3:'Un outil de travail pour bridgeur de tout niveau.',
  carousel_p_3:'',
  carousel_caption_3:'En Savoir Plus',
}

var dataen={
  title: 'Bridge Symphony',
  active:'home',
  lang:'2',

  carousel_h1_1:'Bridge Symphony the best trump for bridgers ',
  carousel_p_1:'',
  carousel_caption_1:'Learn More',

  carousel_h1_2:'A didactic support for teaching bridge',
  carousel_p_2:'',
  carousel_caption_2:'Learn More',

  carousel_h1_3:'A pedagogic tool for all level bridge player',
  carousel_p_3:'',
  carousel_caption_3:'Learn More',

}

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.session.lang) {req.session.lang=1;}
  if (req.query.lang) {req.session.lang=req.query.lang}
  if (req.session.lang==1) {res.render('index', datafr);}
  if (req.session.lang==2) {res.render('index', dataen);}
});

module.exports = router;
