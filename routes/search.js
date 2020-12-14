var express = require('express');
var router = express.Router();
var db=require('../database');


router.get('/inventory-search', function(req, res, next) {
    res.render('inventory-search', { title: 'Search Inventory'});
});

router.post('/', function(req,res) {

    var userchoice = req.body.choice;
    
    console.log("User chose to search from: " + userchoice);
    console.log("User chose to search for: " + searchItem);

    if(userchoice == "partID"){
        var searchItem = req.body.param;
        db.query("SELECT * FROM inventory WHERE partID = ?", searchItem, function (err, data, fields) {
            if (err) throw err;
            res.render('inventory-searched', { title: 'Inventory Searched', userData: data});
        });

    }if(userchoice == "partName"){
        var searchItem = "%" + req.body.param + "%";

        db.query("SELECT * FROM inventory WHERE partName LIKE ?", searchItem, function (err, data, fields) {
            if (err) throw err;
            res.render('inventory-searched', { title: 'Inventory Searched', userData: data});
        });

    }if(userchoice == "priceAbove"){
        var searchItem = req.body.param;
        db.query("SELECT * FROM inventory WHERE price >= ?", searchItem, function (err, data, fields) {
            if (err) throw err;
            res.render('inventory-searched', { title: 'Inventory Searched', userData: data});
        });

    }if(userchoice == "priceBelow"){
        var searchItem = req.body.param;
        db.query("SELECT * FROM inventory WHERE price <= ?", searchItem, function (err, data, fields) {
            if (err) throw err;
            res.render('inventory-searched', { title: 'Inventory Searched', userData: data});
        });

    }else{
        console.log("User choice could not be determined: " + userchoice)
    }
});

module.exports = router;
