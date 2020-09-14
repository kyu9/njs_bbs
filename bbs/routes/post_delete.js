const fn = require('../function/modify');
const express = require('express');
const router = express.Router();

router.post('/', function(req, res){
    fn.deletePost(req.body.id, res);
})

module.exports = router;