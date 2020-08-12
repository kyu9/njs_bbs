var express = require('express')
let models = require('../models');
let router = express.Router()

router.post('/', async(req, res, next) => {
    try{
        let id = req.body.postid;
        console.log('HERE!!!!!!!!!!')
        const curpost = await models.post.findOne({
            where:{
                id: id
            }
        })
        res.render('post', {curpost: curpost})
    }catch(e){
        console.error(e);
        next(e);
    }
})