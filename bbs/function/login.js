let models = require('../models').User;
let express = require('express');
let app = express()
function loginFunction(id,pwd,res,req){
    let responseData;
    const user = models.User.findOne({
        where: {id: id}
    })
        .then(function(user){
            console.log(user)
        })
        .catch(function(err){
            console.log('오류발생!!')
        })
}

exports.loginFunction = loginFunction;
