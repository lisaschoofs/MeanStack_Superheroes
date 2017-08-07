var express = require('express');
var router = express.Router();
// var path = require('path');
var mongoose = require('mongoose');

var HeroSchema = mongoose.Schema({
  alias: String,
  first_name: String,
  last_name: String,
  city: String,
  power_name: String
});

var PowerSchema = mongoose.Schema({
  power_name: String
});

var Heroes = mongoose.model("Heroes", HeroSchema);
// var SuperPowers = mongoose.model();

//GET heroes
router.get('/'), function(req,res){
  console.log('in get heroes');
  Heroes.find(function(err, allHerores){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    console.log('logging heroes: ', allHeroes);
    res.send(allHeroes);
  });
};

router.post('/'), function(req,res){
  console.log('made it to post!');
  var Hero = new Heroes();
  console.log('logging req.body: ', req.body);
  Hero.save(function(err, savedHero){
  if(err){
    console.log(err);
    res.sendStatus(500);
  }
    console.log(savedHero);
    res.send(savedHero);
  });

};


module.exports = router;
