var express = require('express');
var router = express.Router();
var db=require('../database');

/* GET users listing. */
router.get('/inventory-add');
router.post('/', function(req, res, next) {
    var createItem = {
        partID: req.body.partID,
        partName: req.body.partName,
        price: req.body.price
    }
  db.query('INSERT INTO inventory SET ?', createItem, function (err, data, fields) {
  if (err) throw err;
  res.send('Saved succesfully');
});
});

module.exports = router;
