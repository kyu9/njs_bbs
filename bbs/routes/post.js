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
            var img = result.file;
            if(title!=null){
                models.comment.findAll({
                    where:{
                        pid: post
                    }
                })
                    .then((result)=>{
                        res.render('post', {
                            title:title, content: content, writer: writer, img: img, comments: result
                        })
                    })
                    .catch((err)=>{
                        console.log('댓글이 없습니다..!')
                    })
            }


        })
        .catch(function(err){
            console.log('게시물이 없습니다..!')
        })
})
module.exports = router;