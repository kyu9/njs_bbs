var express = require('express');
var models = require('../models');
var router = express.Router();

router.get('/', async (req, res, next)=>{
    try{
        const userid = req.session.user;
        const posts = await models.post.findAll({
            where:{uid: userid}
        });
        const comments = await models.comment.findAll({
            where:{userid: userid}
        });
        res.render('history', {userid: userid, posts: posts, comments: comments});
    }catch (e){
        console.error(e);
        next(e);
    }
})

module.exports = router;