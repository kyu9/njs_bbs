let express = require('express');
let router = express.Router();
let post = require('../function/posting')

router.post('/', function(req, res){
    post.wNoImg(req.body.title, req.body.content, req.session.user, function(result){
        res.json(result);
    })
})


module.exports = router;