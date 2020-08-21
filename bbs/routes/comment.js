let express = require('express');
let router = express.Router();
let post = require('../function/post')

router.post('/', function(req, res){
    //console.log(req.body.pid);console.log(req.body.content);console.log(req.body.uid);console.log(req.body.password);
    post.writeComment(req.body.pid, req.body.content, req.body.uid, req.body.password, function(result){res.json(result);})
})

module.exports = router;