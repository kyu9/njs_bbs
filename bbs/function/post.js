var models = require('../models');

const wNoImg = (...args) => {
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

const wImg = (...args) => {
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
                    file: args[4],
                }).then(function(result){
                    args[5](responseData)
                });
            }else{
                responseData = {'result': 'no'};
                models.user.findOne({
                    where:{id: args[2]}
                }).then(function(result){
                    console.log(user.dataValues.id+'의 비밀번호가 틀렸습니다.')
                    args[5](responseData)
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
                args[5](responseData)
            })
        })
}

const writeComment = (...args) => {
    let responseData
    models.user.findOne({
        where:{
            id: args[2]
        }
    })
        .then((user)=>{
            if(user.dataValues.password === args[3]){
                responseData = {'result': 'ok'}
                models.comment.create({
                    pid: args[0],
                    content: args[1],
                    userid: args[2]
                }).then(function(result){
                    args[4](responseData)
                }).catch((err)=>{
                    console.error(err)
                    })
            }else{
                responseData = {'result' : 'no'}
                models.user.findOne({
                    where:{id:args[2]}
                }).then(function(result){
                    console.log(user.dataValues.id+'의 비밀번호가 틀렸습니다!')
                    args[4](responseData)
                }).catch((err)=>{
                    console.error(err)
                })
            }
        })
        .catch((err)=>{
            responseData = {'result': 'none'}
            models.user.findAll({
                where:{id: args[2]}
            }).then(function(result){
                console.log('존재하지 않는 아이디입니다!')
                args[4](responseData)
            }).catch((err)=>{
                console.error(err)
            })
        })
}

exports.wImg = wImg;
exports.writeComment = writeComment;
exports.wNoImg = wNoImg;


