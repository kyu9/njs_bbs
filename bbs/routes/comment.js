let express = require('express');
let router = express.Router();
let post = require('../function/post')

router.post('/', function(req, res){
    post.writeComment(req.body.pid, req.body.content, req.body.uid, req.body.password, function(result){res.json(result);})
})

module.exports = router;