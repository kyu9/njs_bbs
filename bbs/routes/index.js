var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let session = req.session.user;

  res.render('main', {user: session});
});


module.exports = router;
