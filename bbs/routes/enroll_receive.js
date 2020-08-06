let express = require('express');
let router = express.Router();
let app = express();
let path = require('path')
let validation = require('../function/enrollValidation')
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug')

router.post('/',function(req,res){
    //name,email,nickname,password,confirm
    let info = req.body;
    console.log(info);
})

module.exports = router
