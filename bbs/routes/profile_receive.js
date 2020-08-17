var express = require('express');
var router = express.Router();
var models = require('../models');
var fn = require('../function/profile');

router.post('/', async (req, res, next )=>{
    try{
        await fn.showProfile(req.body.uid);
    }catch (e) {
        console.error(e);
        next(e);
    }
})

module.exports = router;