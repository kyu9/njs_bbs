var express = require('express');
var router = express.Router();
let jwt = require('jsonwebtoken')

router.get('/', function(req, res, next) {
        //let cookie = req.cookies.user;
    if(req.cookies.user){
            const user = jwt.verify(req.cookies.user, 'secret');
            res.render('main', {user: user.id});
    }
    else
        res.render('main');
});


module.exports = router;
