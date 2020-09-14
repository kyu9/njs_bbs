import express from 'express'
const jwt = require('jsonwebtoken')
const router = express.Router();

router.get('/', function(req, res) {
    if(req.cookies.user){
        const user = jwt.verify(req.cookies.user, 'secret');
        res.render('main', {user: user.id});
    }
    else
        res.render('main');
});


module.exports = router;

