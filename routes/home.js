var $util = require('../util/util');
var express = require('express');
var router = express.Router();

router.all('/user-list', function(req, res, next) {
    var data={
        status:'200',
        msg: 'success',
        items: [{name: 1, age: 14}]
    }

    $util.delayed(function(){
       res.status(200).json(data);
    });
 })

module.exports = router;
