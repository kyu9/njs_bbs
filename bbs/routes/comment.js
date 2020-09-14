const express = require('express');
const router = express.Router();
const post = require('../function/posting')
const jwt = require('jsonwebtoken')

router.post('/', function(req, res){
    let user = jwt.verify(req.cookies.user, 'secret');
    post.writeComment(req.body.pid, req.body.content, user.id, function(result){res.json(result);})
})

module.exports = router;