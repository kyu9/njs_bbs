let express = require('express')
let models = require('../models');
let router = express.Router()

router.get('/',async(req,res, next)=>{
    try{
        const posts = await models.post.findAll();
        res.render('posts', {posts : posts, userid: req.session.user})
    }catch (e) {
        console.error(e);
        next(e);
    }
})

module.exports = router;