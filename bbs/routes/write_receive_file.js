let express = require('express');
let router = express.Router();
let post = require('../function/post')
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/Users/kyudoshim/mybbs/bbs/upload/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
var upload = multer({storage: storage})

router.post('/', upload.single('img'), function(req, res){
    console.log(req.body.title);
    console.log(req.file.filename);
    post.wImg(req.body.title, req.body.content, req.body.uid, req.body.password, req.file.filename, function(result){res.json(result);})
})

module.exports = router;