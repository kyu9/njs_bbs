var models = require('../models');

const wNoImg = (...args) => {
    let responseData
    models.post.create({
        title: args[0],
        content: args[1],
        uid: args[2],
    }).then(function(result){
        responseData = {'result':'ok'}
        console.log(result.id + '번째 게시물이 작성 되었습니다...')
        args[3](responseData)
    }).catch((err)=>{
        responseData = {'result':'no'}
        args[3](responseData)
    })

}

const wImg = (...args) => {
    let responseData
    models.post.create({
        title: args[0],
        content: args[1],
        uid: args[2],
        file: args[3]
    }).then(function(result){
        responseData = {'result':'ok'}
        console.log(result.id+ '번째 게시물이 작성 되었습니다...')
        args[4](responseData)
    }).catch((err)=>{
        responseData = {'result':'no'}
        args[4](responseData)
    })

}

const writeComment = (...args) => {
    let responseData = {'result':'ok'}
    models.comment.create({
        pid: args[0],
        content: args[1],
        userid: args[2]
    }).then(function(result){
        responseData = {'result':'ok'}
        console.log(result.id+ '번쨰 댓글이 작성 되었습니다...')
        args[3](responseData)
    }).catch((err)=>{
        responseData = {'result':'no'}
        args[3](responseData)
    })


}

exports.wImg = wImg;
exports.wNoImg = wNoImg;
exports.writeComment = writeComment;