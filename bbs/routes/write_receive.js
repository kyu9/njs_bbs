let express = require('express');
let router = express.Router();
let post = require('../function/post')
const multer = require('multer');
const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'upload/');
        },
        filename: (req, file, cb) => {
            cb(null, new Date().valueOf() + path.extname(file.originalname));
        },
    }),
});

router.post('/', upload.single('img'), function(req, res){
            post.writePost(req.body.title, req.body.content, req.body.uid, req.body.password, img.filename, function(result){
                res.json(result);
            })
})

module.exports = router;