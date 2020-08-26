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

exports.deleteComment = deleteComment;
exports.deletePost = deletePost;