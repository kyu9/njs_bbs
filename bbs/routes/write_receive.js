let express = require('express');
let router = express.Router();
let post = require('../function/post')
const multer = require('multer');
const upload = multer({dest: '/Users/kyudoshim/mybbs/bbs/public/images'});

router.post('/', upload.single('img'), function(req, res){
    post.writePost(req.body.title, req.body.content, req.body.uid, req.body.password, req.file.filename, function(result){res.json(result);})
})

module.exports = router;