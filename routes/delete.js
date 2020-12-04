var express = require('express');
var router = express.Router();
var db=require('../database');
  
router.post('/', function(req, res, next) {
    db.query('DELETE FROM inventory WHERE partID = ?', req.body.partID, function (err, data, fields) {
        if (err) throw err;
        res.render('index', { title: 'CompConfig' });
    });
});

module.exports = router;
