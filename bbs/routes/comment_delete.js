let fn = require('../function/modify');
let express = require('express');
let router = express.Router();

router.post('/', function(req, res){
    fn.deleteComment(req.body.id, res);
})

module.exports = router;