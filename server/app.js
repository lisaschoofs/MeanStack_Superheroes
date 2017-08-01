//BASE MODULES
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//Database Variables
var mongoose = require("mongoose");
var mongoURI = "mongodb://localhost:27017/heroes";
var MongoDB = mongoose.connect(mongoURI).connection;

//ROUTE MODULES
var index = require('./routes/index');
var heroes = require('./routes/heroes');

MongoDB.on("error", function(err){
  console.log("Mongo Connection Error :" + err);
});


MongoDB.once("open", function(){
  console.log("MongoDB is connected! Good Work!");
});

//APP CONFIG
app.set('port', (process.env.PORT || 5000));

//MIDDLEWARE CONFIG
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//ROUTES
app.use('/heroes', heroes);
app.use('/', index);

//LISTEN
app.listen(app.get('port'), function(){
  console.log('Listening on port: ', app.get('port'));
});
