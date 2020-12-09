const express = require('express');
const router = express.Router();
const post = require('../function/modify');
const multerS3 = require('multer-s3');
const multer = require('multer');
const AWS = require('aws-sdk');
//local

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/Users/kyudoshim/mybbs/bbs/public/images/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage})


router.post('/', upload.single('img'), function(req, res){
    post.uImg(req.body.title, req.body.content, req.body.pid, req.file.filename, function(result){
        res.json(result);
    })
})


module.exports = router;
