let models = require('../models')

function deletePost(id, res){
    let responseData
    models.post.destroy({
        where:{id: id}
    })
        .then(function(post){
            responseData = {'result' : 'ok'};
            res.json(responseData);
            console.log(post.id +'번째 게시물 삭제 완료!');
        })
        .catch((err)=>{
            console.error(err);
        })
}

function deleteComment(id, res){
    let responseData
    models.comment.destroy({
        where:{id: id}
    })
        .then(function(comment){
            responseData = {'result' : 'ok'};
            res.json(responseData);
            console.log('댓글 삭제 완료!');
        })
        .catch((err)=>{
            console.error(err);
        })
}

const uNoImg = (...args) => {
    let responseData
    models.post.update({
        title: args[0],
        content: args[1],
    },{
        where:{id: args[2]}
    }).then(function(result){
        responseData = {'result' : 'ok'}
        args[3](responseData);
    }).catch((err)=>{
        responseData = {'result': 'no'}
        args[3](responseData);
        console.error(err);
    })
}

const uImg = (...args) => {
    let responseData
    models.post.update({
        title: args[0],
        content: args[1],
        file: args[3],
    },{
        where:{
            id: args[2]
        }
    }).then(function(result){
        responseData = {'result' : 'ok'}
        args[4](responseData);
    }).catch((err)=>{
        responseData = {'result': 'no'}
        args[4](responseData);
        console.error(err);
    })

}

exports.uNoImg = uNoImg;
exports.uImg = uImg;
exports.deleteComment = deleteComment;
exports.deletePost = deletePost;