var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SVG-TO-JPG' });
});


router.post('/product', function(req, res, next) {
  res.render('product', { 
    title: 'SVG-TO-JPG',
    name: req.body.name
  });
});

router.get('/product/:name', function(req, res, next) {
  res.render('productParam', { 
    title: 'SVG-TO-JPG',
    name: req.params.name
  });
});

module.exports = router;
