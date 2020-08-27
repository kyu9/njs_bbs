let express = require('express');
let router = express.Router();
let models = require('../models');
let fn = require('../function/modify')

router.post('/', function(req, res){
    fn.deleteImg(req.body.id, res);
})

module.exports = router;