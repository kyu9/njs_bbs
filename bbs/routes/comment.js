let express = require('express');
let router = express.Router();
let post = require('../function/posting')
let jwt = require('jsonwebtoken')

router.post('/', function(req, res){
    let user = jwt.verify(req.cookies.user, 'secret');
    post.writeComment(req.body.pid, req.body.content, user.id, function(result){res.json(result);})
})

module.exports = router;