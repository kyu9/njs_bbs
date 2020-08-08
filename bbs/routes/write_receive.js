let express = require('express');
let router = express.Router();
let post = require('../function/post')
let models = require('../models');

router.post('/', function(req, res){
            post.writePost(req.body.title, req.body.content, req.body.uid, req.body.password, function(result){
                res.json(result);
            })
})

module.exports = router;