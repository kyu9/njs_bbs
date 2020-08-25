let express = require('express')
let router = express.Router()
let login = require('../function/login');

router.post('/',function(req,res){
    let id, pwd;
    id = req.body.login_id;
    pwd = req.body.login_password;
    login.loginFunction(id,pwd,res,req);
})

module.exports = router;