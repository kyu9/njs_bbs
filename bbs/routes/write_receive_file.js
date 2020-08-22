let express = require('express');
let router = express.Router();
let post = require('../function/post');
const multerS3 = require('multer-s3');
const multer = require('multer');
const AWS = require('aws-sdk');
AWS.config.update({
    accessKeyId: 'AKIAZSCSHZ5FYML6ZV5M',
    secretAccessKey: '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',
    region: 'ap-northeast-2'
})
/*
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/Users/kyudoshim/mybbs/bbs/upload/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
var upload = multer({storage: storage})

 */
let s3 = new AWS.S3();
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'mybbs',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key(req, file, cb){
            cb(null, file.originalname)
        }
    })
})

router.post('/', upload.single('img'), function(req, res){
    post.wImg(req.body.title, req.body.content, req.body.uid, req.body.password, req.file.filename, function(result){res.json(result);})
})

module.exports = router;