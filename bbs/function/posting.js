//const models = require('../models');

import UserRepo from '../repositories/user.repository'

const wNoImg = async(req, res, next) => {
    let responseData
    const userRepo = new UserRepo()
    try{
        const post = await userRepo.writePost(req.body.title, req.body.content, res.locals.id)
        if(post){
            responseData = {'result':'ok'}
            res.status(301).json(responseData)
        }
    }catch (e){
        next(e)
    }
}

/*
const wImg = async(req, res, next) => {
    let responseData
    const userRepo = new UserRepo()
    try{
        const post = await userRepo.writePostFile(
            req.body.title,
            req.body.content,
            res.locals.id,
            req.file)
        if(post){
            responseData = {'result' : 'ok'}
            res.status(301).json(responseData)
        }
    }catch(e){
        next(e)
    }
}

 */
const wImg = (...args) => {
    let responseData
    const userRepo = new UserRepo()
        const post = userRepo.writePostFile(
            args[0], args[1], args[2], args[3])
        if(post){
            responseData = {'result' : 'ok'}
        }

}
/*
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

 */



export{
    wNoImg,
    wImg,
}
