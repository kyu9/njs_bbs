let express = require('express');
let router = express.Router();
let post = require('../function/posting');
const multerS3 = require('multer-s3');
const multer = require('multer');
const AWS = require('aws-sdk');
let jwt = require('jsonwebtoken');


AWS.config.update({
    accessKeyId: process.env["AWS_KEYID "],
    secretAccessKey: 'mHoL4mIQ8gwqEYhjNt2APp0dmTsFHKH0uKb4t+YC',
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

//aws
/*
let s3 = new AWS.S3();
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'mybbs',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read-write',
        key(req, file, cb){
            cb(null, file.originalname)
        }
    })
})

 */

router.post('/', upload.single('img'), function(req, res){
    let user = jwt.verify(req.cookies.user, 'secret');
    //aws
    //post.wImg(req.body.title, req.body.content, req.body.uid, req.body.password, req.file.location, function(result){res.json(result);})
    //local
    post.wImg(req.body.title, req.body.content, user.id, req.file.filename, function(result){res.json(result);})
})

module.exports = router;