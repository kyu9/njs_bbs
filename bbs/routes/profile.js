const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', function(req, res){
    models.user.findOne({
        where:{
            id: req.query.uid
        }
    })
        .then((user)=>{
            res.render('profile', {user: user})
        })
        .catch((err)=>{
            console.log('req.body.uid에서 에러발생')
        })
});

module.exports = router;