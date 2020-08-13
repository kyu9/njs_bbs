var express = require('express')
let router = express.Router()
let post = require('../function/post')


router.get('/',function(req,res){

    res.render('post')
})



module.exports = router;