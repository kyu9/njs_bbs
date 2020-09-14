const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', function(req, res){
    models.post.findOne({
        where:{
            id: req.query.id
        }
    })
        .then((result)=>{
            res.render('pfix', {result: result});
        })
        .catch((err)=>{
            console.error(err);
        })

})

module.exports = router;