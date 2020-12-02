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
        price: req.body.price
    }
  db.query('INSERT INTO inventory SET ?', createItem, function (err, data, fields) {
  if (err) throw err;
  res.render('index', { title: 'CompConfig' });
});
});

module.exports = router;
