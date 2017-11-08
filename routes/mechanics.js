var express = require('express');
var router = express.Router();


var gameMechanics = [
    {name: 'Scotland Yard', imageUrl: 'images/Scotlandyard2.jpg', rationale: "This game would be cool to use because it's about Scotland."},
    {name: 'Mah Jong', imageUrl: 'images/Mah-yongg_stones.jpg', rationale: "This game would be cool to use because it has tiles."},
    {name: 'Monopoly', imageUrl: 'images/monopoly.jpg', rationale: "Real estate is fun."}, 
    {name: 'Hopscotch', imageUrl:'/images/hopscotch.jpg', rationale: 'Jumping is fun'}
  ]

/* GET home page. */
router.get('/', function(req, res, next) {
  var rollResult = Math.floor((Math.random() * gameMechanics.length));
  console.log("we rolled and got " + rollResult);
  res.render('mechanics', { title: gameMechanics[rollResult].name, imageUrl: gameMechanics[rollResult].imageUrl, rationale: gameMechanics[rollResult].rationale });
});

module.exports = router;
