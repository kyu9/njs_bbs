let express = require('express')
let router = express.Router()
let sha256 = require('sha256')
let login = require('../function/login');

router.post('/',function(req,res){
    let id = req.body.login_id;
    let pwd = req.body.login_password;
    login.loginFunction(id,pwd,res,req);
})

module.exports = router;