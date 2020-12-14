var express = require('express');
var router = express.Router();
var db=require('../database');
  
router.post('/', function(req, res, next) {
    var sortChoice = req.body.sortPrice;
    var querySort;

    if(sortChoice == "priceLoHi") {
        var querySort = ('SELECT * FROM inventory ORDER BY price ASC');
    } else if(sortChoice == "priceHiLo") {
        var querySort = ('SELECT * FROM inventory ORDER BY price DESC');
    }else {
        var querySort = ('SELECT * FROM inventory')
    }

    db.query(querySort, function (err, data, fields) {
        if (err) throw err;
        res.render('inventory-read', {userData: data});
    });
});

module.exports = router;
