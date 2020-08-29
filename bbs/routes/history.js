var express = require('express');
var models = require('../models');
var router = express.Router();
let jwt = require('jsonwebtoken');

router.get('/', async (req, res, next)=>{
    try{
        let user = jwt.verify(req.cookies.user, 'secret');
        const userid = user.id
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