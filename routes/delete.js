var express = require('express');
var router = express.Router();
var db=require('../database');

/* GET users listing. */
router.get('/inventory-delete', function(req, res, next) {
    res.render('inventory-delete', { title: 'Delete Inventory Item'});
});
  
router.post('/', function(req, res, next) {
    db.query('DELETE FROM inventory WHERE partID = ?', req.body.partID, function (err, data, fields) {
        if (err) throw err;
        res.render('index', { title: 'CompConfig' });
    });
});

module.exports = router;
