var express = require('express');
var router = express.Router();
var db=require('../database');

/* GET users listing. */
router.get('/inventory-add', function(req, res, next) {
    res.render('inventory-add', { title: 'Add Inventory'});
});
  
router.post('/', function(req, res, next) {
    var createItem = {
        partID: req.body.partID,
        partName: req.body.partName,
        price: req.body.price,
        partType: req.body.partType,
        currentStock: req.body.currentStock
    }
    db.query('INSERT INTO inventory SET ?', createItem, function (err, data, fields) {
        if (err) throw err;
        res.render('index', { title: 'Inventory', userData: data});
    });
});


module.exports = router;
