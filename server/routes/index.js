var express = require('express');
var router = express.Router();
var path = require('path');

//BASE ROUTE
router.get('/', function(req,res){
  res.sendFile(path.resolve('serve/public/views/index.html'));
});

module.exports = router;
