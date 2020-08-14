let express = require('express')
let router = express.Router()
let post = require('../function/post')
let models = require('../models');

router.post('/',async(req,res,next)=>{
        try{
            await post.findPost(req.body.pid);

        } catch (e) {
            console.error(e);
            next(e)
        }
})

module.exports = router;