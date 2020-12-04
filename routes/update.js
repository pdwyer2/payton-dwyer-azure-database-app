var express = require('express');
var router = express.Router();
var db=require('../database');

 router.post('/', function(req,res) {
    var updateItem = {
        partID: req.body.partID,
        partName: req.body.partName,
        price: req.body.price
    }
    db.query('UPDATE inventory SET ? WHERE partID = ?', [updateItem,req.body.partID], function (err, data, fields) {
        if (err) throw err;
        res.render('index', { title: 'CompConfig' });
    });
});

module.exports = router;
