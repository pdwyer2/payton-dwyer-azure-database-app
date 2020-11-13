var express = require('express');
var router = express.Router();
var db=require('../database');

/* GET users listing. */
router.get('/inventory-list', function(req, res, next) {
  
  var sql='SELECT * FROM inventory';
  db.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.render('inventory-list', { title: 'Inventory', userData: data});
});
});

module.exports = router;
