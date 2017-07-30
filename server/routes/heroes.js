var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var HeroSchema = mongoose.Schema({
//
});

var PowerSchema = mongoose.Schema({
  power_name:
});

// var Heroes = mongoose.model();
// var SuperPowers = mongoose.model();

//GET heroes
router.get("/", function(req,res){

  Heroes.find(function(err, allHerores){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    // console.log(allHeroes);
    res.send(allHeroes);
  });

});


module.exports = router;
