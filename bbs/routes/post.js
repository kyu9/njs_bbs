var express = require('express')
let router = express.Router()
let models = require('../models')

router.get('/',function(req,res){
    models.post.findOne({
        where:{
            id: req.query.pid
        }
    })
        .then((result)=>{
            var post = result.id;
            var title = result.title;
            var content = result.content;
            var writer = result.uid;
            if(title!=null){
                models.comment.findAll({
                    where:{pid: post}
                })
                    .then((result)=>{
                        res.render('post', {title:title, content: content, writer: writer, comments: result})
                    })
                    .catch((err)=>{
                        console.log('게시물이없습니다..!')
                    })
            }
        })
        .catch(function(err){
            console.log('route/post에서 에러발생......')
        })
})
module.exports = router;