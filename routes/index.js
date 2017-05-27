var express = require('express');
var router = express.Router();

var datafr={
  title: 'Bridge Symphony',
  active:'home',
  lang:'1',

  carousel_h1_1:'Bridge Symphony le meilleur atout des bridgeurs',
  carousel_caption_1:'En Savoir Plus',
  feature1_h2:'Enseignant ou joueur, le bridge a portée de main ',
  feature1_h2_sub: 'Pratique ludique et d\'une parfaite visibilité',
  feature1_p:'Bridge Symphony vous propose des miliers de possibilités d\'enchères a partir de 104 cartes declinant 26 donnes simulées resepcant les probabilités distributionelles (cf. typologie) que vous pouvez developper a loisir selon vos objectifs pedagogiques ou votre niveau personel',

  carousel_h1_2:'Un support didactique pour l\'enseignement du bridge ',
  carousel_caption_2:'En Savoir Plus',
  feature2_h2:'',
  feature2_h2_sub: '',
  feature2_p:'',

  carousel_h1_3:'Un outil de travail pour bridgeur de tout niveau ',
  carousel_caption_3:'En Savoir Plus',
  feature3_h2:'',
  feature3_h2_sub: '',
  feature3_p:''

}

var dataen={
  title: 'Bridge Symphony',
  active:'home',
  lang:'2',

  carousel_h1_1:'Bridge Symphony the best trump for bridgers ',
  carousel_caption_1:'Learn More',
  feature1_h2:'Teacher or player the bridge in your hands ',
  feature1_h2_sub: '',
  feature1_p:'',

  carousel_h1_2:'A didactic support for teaching bridge ',
  carousel_caption_2:'Learn More',
  feature2_h2:'',
  feature2_h2_sub: '',
  feature2_p:'',

  carousel_h1_3:'A pedagogic tool for all level bridge player ',
  carousel_caption_3:'Learn More',
  feature3_h2:'',
  feature3_h2_sub: '',
  feature3_p:'',
}

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.session.lang) {req.session.lang=1;}
  if (req.query.lang) {req.session.lang=req.query.lang}
  if (req.session.lang==1) {res.render('index', datafr);}
  if (req.session.lang==2) {res.render('index', dataen);}
});

module.exports = router;
