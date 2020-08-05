var express = require('express');
var User = require('../models').User;
var router = express.Router();

router.get('/', async(req, res, next)=>{
    try{
        const users = await User.findAll();
        res.render('test', {users});
    }catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;