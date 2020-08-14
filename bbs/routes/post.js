var express = require('express')
let router = express.Router()
let models = require('../models')
let post = require('../function/post')


router.get('/',function(req,res){
    //post.findPost(req.query.pid);
    var title;
    var writer;
    var content;

    models.post.findOne({
        where:{
            id: req.query.pid
        }
    })
        .then((result)=>{
            title = result.title;
            content = result.content;
            writer = result.uid;
            res.render('post', {title:title, content: content, writer: writer})
        })
        .catch(function(err){
            console.log('에러방새......')
        })


})



module.exports = router;