let express = require('express')
let router = express.Router()
let sha256 = require('sha256')
let login = require('../function/login');

router.post('/',function(req,res){
    let id = req.body.login_id;
    let pwd = req.body.login_password;
    req.session.user = req.body.login_id;
    //if(req.session.save(()=>{console.log('세션저장에 성공했습니다!');}))
    login.loginFunction(id,pwd,res,req);
})

module.exports = router;