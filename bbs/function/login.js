let models = require('../models');
let sha256 = require('sha256');
let express = require('express')
let app = express()
function loginFunction(id,pwd,res,req){
    let responseData;
    models.user.findOne({
        where:{id: id}
    })
        .then(function(user){
            if(user===null || user.dataValues.password!==pwd){
                responseData = {'result' : 'fail'};
                res.json(responseData);
                console.log('로그인 실패!');
            }else if(user.dataValues.password==pwd) {
                responseData = {'result': 'ok'};
                res.json(responseData);
                console.log(user.dataValues.name + "님이 " + user.dataValues.id + "로 로그인했습니다.");
            }
        })
        .catch(function(err){
            console.log('오류발생!!')
        })
}

exports.loginFunction = loginFunction;
