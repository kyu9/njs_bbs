let express = require('express')
let router = express.Router()

router.get('/',function(req,res){
    res.clearCookie('user');
    res.redirect('/');
})

module.exports = router;