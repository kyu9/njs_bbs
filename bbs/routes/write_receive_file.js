import express from 'express'
import {verifyToken} from '../middleware/jwt.middleware'
import {wImg} from '../function/posting'
const post = require('../function/posting')
const router = express.Router()
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/Users/kyudoshim/mybbs/bbs/public/images/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage})

/*

const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
AWS.config.update({
    accessKeyId: ,
    secretAccessKey: ,
    region:
})


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

router.put('/',verifyToken, upload.single('img'), function(req, res){
    console.log(res.locals.id)
    wImg(req.body.title, req.body.content, res.locals.id, req.file.filename,function(result){res.json})
} )
//router.route('/').put(verifyToken, upload.single('img'), wImg,)

/*
router.put('/', upload.single('img'), function(req, res){
    let user = jwt.verify(req.cookies.user, 'secret');
    //aws
    //post.wImg(req.body.title, req.body.content, req.body.uid, req.body.password, req.file.location, function(result){res.json(result);})
    //local
    post.wImg(req.body.title, req.body.content, user.id, req.file.filename, function(result){res.json(result);})
})

 */

module.exports = router;