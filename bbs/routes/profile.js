var express = require('express');
var router = express.Router();
let fn = require('../function/profile');
var models = require('../models');

router.get('/', function(req, res){
    models.user.findOne({
        where:{
            id: req.query.uid
        }
    })
        .then((result)=>{
            res.render('profile', {user:result})
        })
        .catch((err)=>{
            console.log('사용자가 없습니다!');
        })
});

module.exports = router;