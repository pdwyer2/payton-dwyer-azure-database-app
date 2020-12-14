var express = require('express');
var router = express.Router();
var db=require('../database');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CompConfig'});
});

router.post('/', function(req, res, next) {
  db.query('SELECT * FROM inventory', function (err, data, fields) {
      if (err) throw err;
      res.render('index', { title: 'Inventory', userData: data});
  });
});

module.exports = router;
