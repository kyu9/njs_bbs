let models = require('../models');
let jwt = require('jsonwebtoken');

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
                console.log(user.dataValues.name + "님이 " + user.dataValues.id + "로 로그인했습니다.");
                let token = jwt.sign({
                    id: user.dataValues.id
                }, 'secret',
                    {
                        expiresIn: '2h'
                    })
                res.cookie('user', token);
                res.json(responseData);
            }
        })
        .catch(function(err){
            console.log('login함수에서 오류발생!!')
        })
}

exports.loginFunction = loginFunction;
