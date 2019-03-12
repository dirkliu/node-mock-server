var $util = require('../util/util');
var express = require('express');
var router = express.Router();




router.all('/misc/add', function(req, res, next) {
   var data={
      "result": true
   }

   $util.delayed(function(){
      res.json(data);
   },500);
});

router.all('/misc/update', function(req, res, next) {
   var data={
      "result": true
   }

   $util.delayed(function(){
      res.json(data);
   },500);
});

router.all('/misc/delete', function(req, res, next) {
   var data={
      "result": true
   }

   $util.delayed(function(){
      res.json(data);
   },500);
});

router.all('/package/update', function(req, res, next) {
   var data={
      "result": true
   }

   $util.delayed(function(){
      res.json(data);
   },500);
});


module.exports = router;
