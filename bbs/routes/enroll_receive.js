let express = require('express');
let router = express.Router();
let validation = require('../function/enrollValidation')

router.post('/',function(req,res){
    //name,email,nickname,password,confirm
    console.log(req.body);
    var info = req.body;
    validation.enrollValidation(info,res);
})

module.exports = router
