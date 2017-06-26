var express = require('express');
var router = express.Router();

var datafr={
  title: 'Bridge Symphony',
  active:'home',
  lang:'1',

  carousel_h1_1:'Bridge Symphony, le meilleur atout des bridgeurs',
  carousel_caption_1:'En Savoir Plus',
  feature1_h2:'Le bridge à portée de mains ',
  feature1_h2_sub: 'Pour Enseignants et Joueurs, pratique ludique et d\'une parfaite visibilité',
  feature1_p:'Bridge Symphony vous propose des milliers de possibilités d\'enchères à partir de 104 cartes déclinant 26 donnes simulées respectant les probabilités distributionelles (cf. Hugh Kesley : Testez votre bridge les probabilités / la lecture des mains - éditions du rocher) que vous pouvez développer à loisir selon vos objectifs pédagogiques ou votre niveau personel. Cet ensemble de cartes pelliculées au format poche constitue une source abondante d\'exemples et d\'exercices vous permettant d\'optimiser vos constructions de jeu. Le bridge certes peut sembler compliqué ce qui fait néanmois son interèt. Bridge Symphony est une moyen de rendre cet apprentisage plus accessible.',

  carousel_h1_2:'Un support didactique pour l\'enseignement du bridge ',
  carousel_caption_2:'En Savoir Plus',
  feature2_h2:'Enseignants, Orchestrez vos propres partitions... ',
  feature2_h2_sub: 'Le premier support didactique',
  feature2_p:'Il ne s\'agit en aucun cas d\'une méthode d\'enseignement mais d\'un support simple, pratique et efficace pour enseigner le bridge. Cette panoplie de mains vous permet d\'habiller vos explications ou remarques en les illustrant. L\'usage d\'un tel visuel rend aisé toute présentation de cas et facilite la communication. Il constitue un outil performant et ludique pour l\'apprentissage des enchères, la compréhension du système, l\'analyse de situations ou l\'élaboration de plans de jeu. Avec la carte « typologie » vous sélectionnez les mains correspondantes. Vos élèves disposeront d\'un recueil presque infini de configurations et d\'exercices. Ils y percevront les aspects créatifs, dynamiques, évolutifs, interactifs de ce jeu de construction qui suscitera nombre d\'interrogations venant en retour nourrir votre travail.',

  carousel_h1_3:'Un outil d\'aprentissage et de perfectionnement',
  carousel_caption_3:'En Savoir Plus',
  feature3_h2:'Joueurs, Valorisez votre potentiel ',
  feature3_h2_sub: 'Un outil de progression innovant',
  feature3_p:'Joueur débutant ou confirmé, toutes vos questions trouveront ici de multiples illustrations pouvant guider votre réflexion et doper votre mémoire. Quelques exemples concrets: 9 mains ne totalisent qu\'au plus 4 points honneurs (voir carte typologie). A vous d\'imaginer vos séquences d\'enchères où elle doivent - impérativement ou optionellement - s\'exprimer (problème du surcontre, défense agressive ...). Gérer les mains de 11H,12H "plates" à l\'ouverture, votre partenaire partage-t-il votre vision (3eme,4eme,réveil ...)? Réviser les mains bicolores... H4 : ouvrez vous de 2 coeurs?  Et en intervention ? ... R1 : ouvrir? intervenir? Répondre sur ouverture ou après telle séquence ? ... Mon partenaire me demande de sélectionner G4,J3 K3,M1... sur son ouverture d\'un trèfle, que répondre et que dire en cas  d\'intervention adverse plausible ? ... Insomniaque ? Pensez vos mains au lieu de compter les moutons... ',


  carousel_h1_4:'Mais c\'est quoi ?',
  carousel_caption_4:'En Savoir Plus',
  feature4_h2:'Contenu et Fonctionalité',
  feature4_h2_sub: '',
  feature4_p:'108 cartes (350g) couleur recto-verso au format 11,6cmx18,4cm. D\'une grande lisibilité, faciles à mettre en œuvre, cet ensemble vous procure une mine quasi inépuisable de configurations, d\' exemples ou d\'exercices. 104 mains composant 26 donnes  (A,...,Z) dont l\'élaboration respecte les probabilités distributionnelles. Leur  composition et force est précisée dans une carte particulière (typologie). Pour chaque donne, 6 couples possibles  (A1,A2),(A1,A3), … ,(A3,A4), en situation de jeu (table) 12 positionnements envisageables. Un éventail d\'arrangements qui s\'élargit si l\'on précise l\'ouvreur. Déjà des milliers de scénari, et encore bien davantage avec la compatibilité établie entre mains issues de donnes différentes. Nous pouvons appeler « duo » chacune de ces autres configurations  B1/V1, E3/S1, U2/Q3... répertoriées sur les 2 cartes « compatibilité ». De plus, la distribution aléatoire ou imaginée des 26 cartes à jouer restantes vous permettra d\'obtenir ou de créer autant de nouvelles donnes complètes... Faites vos jeux !',

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
