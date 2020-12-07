var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/inventory-search', function(req, res, next) {
    res.render('inventory-search', { title: 'Search Inventory'});
});

router.post('/', function(req,res) {
    var userchoice = req.body.choice;
    var searchItem = req.body.data;
     
    db.query('SELECT * FROM inventory SET WHERE ? LIKE ?', [userchoice,searchItem], function (err, data, fields) {
        if (err) throw err;
        res.render('inventory-response', { title: 'Inventory Searched', userData: data});
    });
});

module.exports = router;
