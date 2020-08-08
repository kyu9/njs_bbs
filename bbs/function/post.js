let models = require('../models');

const writePost = (...args) => {
    let  responseData
    models.user.findOne({
        where:{
            id: args[2]
        }
    })
        .then(function(user){
            if(user.dataValues.password === args[3]) {
                responseData = {'result': 'ok'};
                models.post.create({
                    title: args[0],
                    content: args[1],
                    uid: args[2],
                }).then(function(result){
                    args[4](responseData)
                });
            }else{
                responseData = {'result': 'no'};
                models.user.findOne({
                    where:{id: args[2]}
                }).then(function(result){
                    console.log(user.dataValues.id+'의 비밀번호가 틀렸습니다.')
                    args[4](responseData)
                });
            }


        })
        .catch(function(err){
            responseData = {'result': 'none'};
            console.log('등록정보가 없습니다...')
            models.user.findAll({
                where:{id: args[2]}
            }).then(function(result){
                console.log('아이디가 없습니다!')
                args[4](responseData)
            })
        })
}

exports.writePost = writePost;
