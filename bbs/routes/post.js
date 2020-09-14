const express = require('express')
const router = express.Router()
const models = require('../models')

router.get('/',function(req,res){
    models.post.findOne({
        where:{
            id: req.query.pid
        }
    })
        .then((result)=>{
            const post = result.id;
            const title = result.title;
            const content = result.content;
            const writer = result.uid;
            const img = result.file;
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