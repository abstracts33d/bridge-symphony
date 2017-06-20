var express = require('express');
var router = express.Router();

var datafr={
  title: 'Bridge Symphony',
  active:'home',
  lang:'1',

  carousel_h1_1:'Bridge Symphony le meilleur atout des bridgeurs',
  carousel_caption_1:'',
  feature1_h2:'Le bridge a portée de main ',
  feature1_h2_sub: 'Pour Enseignants et Joueurs pratique ludique et d\'une parfaite visibilité',
  feature1_p:'Bridge Symphony vous propose des miliers de possibilités d\'enchères a partir de 104 cartes declinant 26 donnes simulées resepcant les probabilités distributionelles (cf. typologie) que vous pouvez developper a loisir selon vos objectifs pedagogiques ou votre niveau personel',

  carousel_h1_2:'Un support didactique pour l\'enseignement du bridge ',
  carousel_caption_2:'En Savoir Plus',
  feature2_h2:'Enseignants, Orchestrez vos propres partitions... ',
  feature2_h2_sub: 'Le premier support didactique',
  feature2_p:'Il ne s agit en aucun cas d une méthode d enseignement mais d un moyen simple, pratique et efficace de la mettre en application. Cette panoplie de mains, dont le maniement vous permet d habiller vos explications ou remarques en les illustrant par autant d exemples que voulus . L usage d un tel visuel rend aisé toute présentation de cas  il facilite la communication et incite aux questions. Il constitue un outil performant et ludique pour l apprentissage des enchères, la compréhension du système, l analyse de situations ou l élaboration de plans de jeu. Avec la carte « typologie » vous sélectionnez les mains correspondantes. Vos élèves disposerontnt d un recueil presque infini de configurations et d exercices. Il y percevront les aspects créatifs, dynamiques, évolutifs, interactifs de ce jeu de construction qui suscitera nombre d interrogations qui viendront en retour nourrir votre travail.',

  carousel_h1_3:'Un outil d\'aprentissage et de perfectionnement',
  carousel_caption_3:'En Savoir Plus',
  feature3_h2:'Joueurs, valoriser votre potentiel ',
  feature3_h2_sub: 'Un outil de progression inovant',
  feature3_p:'Le bridge, à entendre tel un sport, mérite et nécessite un entraînement régulier ainsi quune bonne communication avec votre (vos) partenaires.',


  carousel_h1_4:'Mais c\' est quoi?',
  carousel_caption_4:'En Savoir Plus',
  feature4_h2:'Contenu et Fonctionalité',
  feature4_h2_sub: '',
  feature4_p:'108 cartes (350g) couleur recto-verso au format 11,6cmx18,4cm.D une grande lisibilité et d une immédiate mise en œuvre, cet ensemble vous procure une mine quasi inépuisable de configurations, dexemples ou exercices104 mains composant 26 donnes  (A;B;C ;........;Z)Leur élaboration a été menée dans le respect des probabilités distributionnelles* ;leur typologie (composition et force) est précisée dans une carte particulière.(*cf H.Kesley......)Pour chaque donne, 6 couples possibles  (A1;A2), (A1;A3), ….., (A3;A4)En situation de jeu (table), 12 positionnements envisageables. ... Un éventail darrangements qui s élargit si l on précise qui est l ouvreur...... Déjà des milliers de scénarios......Et encore bien davantage avec la compatibilité établie entre mains issues de donnes différentes ; nous pouvons appeler « duo » chacune de ces autres configurations  A1 /B2; C3/M1 ;...Elles sont toutes répertoriées sur les 2 cartes « compatibilité ».De plus, la distribution, aléatoire ou imaginée, des 26 cartes à jouer restantes vous permettra d obtenir ou de créer autant de nouvelles donnes complètes...............................Faites vos jeux !',

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
