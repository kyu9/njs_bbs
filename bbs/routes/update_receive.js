let express = require('express');
let router = express.Router();
let post = require('../function/modify')

router.post('/', function(req, res){
    post.uNoImg(req.body.title, req.body.content, req.body.pid, function(result){
        res.json(result);
    })
})


module.exports = router;