let express = require('express');
let models = require('../models');
let router = express.Router();
let jwt = require('jsonwebtoken');

router.get('/',async(req,res, next)=>{
    try{
        let user = jwt.verify(req.cookies.user, 'secret');
        let pageNum = req.query.page;
        console.log(pageNum);
        let offset = 0;
        console.log(pageNum);
        if(pageNum>1){
            offset = 7 * (pageNum - 1 );
        }

        await models.post.findAndCountAll({
            offset: offset,
            limit: 7
        })
            .then(result=>{
                const posts = result.rows;
                const count = result.count;
                res.render('posts', {posts: posts, userid: user.id, pageNum: pageNum, count: count})
            })
    }catch (e) {
        console.error(e);
        next(e);
    }
})

module.exports = router;