var express = require('express');
var router = express.Router();

router.get('/', async(req, res, next)=>{
    try{
        res.render('write');
    }catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;