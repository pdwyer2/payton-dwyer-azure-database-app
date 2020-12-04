var express = require('express');
var router = express.Router();
var db=require('../database');

/* GET users listing. */
router.get('/inventory-read', function(req, res, next) {
    var sql='SELECT * FROM inventory';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('inventory-read', { title: 'Inventory', userData: data});
  });
});

//handles update button per inventory item
//sends the partID of the selected item to the inventory-update view
router.post('/', function(req, res, next) {
  res.render('inventory-update', { currentpartID: req.body.partID});
});

module.exports = router;
