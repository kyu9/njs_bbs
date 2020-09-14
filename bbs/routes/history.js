const express = require('express');
const models = require('../models');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/', async (req, res, next)=>{
    try{
        let user = jwt.verify(req.cookies.user, 'secret');
        let userid = user.id
        let posts = await models.post.findAll({
            where:{uid: userid}
        });
        let comments = await models.comment.findAll({
            where:{userid: userid}
        });
        res.render('history', {userid: userid, posts: posts, comments: comments});
    }catch (e){
        console.error(e);
        next(e);
    }
})

module.exports = router;