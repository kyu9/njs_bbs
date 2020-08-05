var express = require('express');
var router = express.Router();

const controller = require('../controller/login.ctrl');

router.get('/', function(req, res, next) {
    res.render('login');
})

router.post('/', controller.post);

module.exports = router;
