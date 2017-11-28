var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var db = require('../db.js');
mongoose.Promise = global.Promise;  //为了避免警告的出现，因为mongoose的默认promise已经弃用了
var User =db.db1;

/* GET users listing. */
router.get('/', function(req, res) {
   User.find({},function(err,result) {
       res.json(result);
   });

});

module.exports = router;
