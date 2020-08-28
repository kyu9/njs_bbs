let express = require('express');
let models = require('../models');
let fn = require('../function/paging');
let router = express.Router()

router.get('/',async(req,res, next)=>{
    try{
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
                res.render('posts', {posts: posts, userid: req.session.user, pageNum: pageNum, count: count})
            })

        //const posts = await models.post.findAll();
        //res.render('posts', {posts : posts, userid: req.session.user})
    }catch (e) {
        console.error(e);
        next(e);
    }
})

module.exports = router;