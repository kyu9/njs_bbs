let express = require('express');
let router = express.Router();
let post = require('../function/modify');
const multerS3 = require('multer-s3');
const multer = require('multer');
const AWS = require('aws-sdk');
AWS.config.update({
    accessKeyId: 'AKIAZSCSHZ5FYML6ZV5M',
    secretAccessKey: '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',
    region: 'ap-northeast-2'
})
//local

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/Users/kyudoshim/mybbs/bbs/public/images/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
var upload = multer({storage: storage})


router.post('/', upload.single('img'), function(req, res){
    post.uImg(req.body.title, req.body.content, req.body.pid, req.file.filename, function(result){
        res.json(result);
    })
})


module.exports = router;