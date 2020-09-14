const express = require('express')
const router = express.Router()

router.get('/',function(req,res){
    res.clearCookie('user');
    res.redirect('/login');
})

module.exports = router;