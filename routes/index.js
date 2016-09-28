var express = require('express');
var router = express.Router();

/* GET request's for members of my family && index. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Meet the Ellery family!'
  });
});
router.get('/justin', function (req, res, next) {
  res.render('justin', {
    title: 'Welcome to the world of Justin!',
    name: 'Justin'
  });
});
router.get('/allan', function (req, res, next) {
  res.render('allan', {
    title: 'Welcome to the world of Allan!',
    name: 'Allan'
  });
});
router.get('/wendy', function (req, res, next) {
  res.render('wendy', {
    title: 'Welcome to the world of Wendy!',
    name: 'Wendy'
  });
});

module.exports = router;