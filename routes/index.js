var express = require('express');
var router = express.Router();
var info = require('../lib/data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', info);
});

module.exports = router;
