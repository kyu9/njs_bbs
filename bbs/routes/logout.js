let express = require('express')
let router = express.Router()

router.get('/',function(req,res){
    req.session.destroy(
        function(err){
            console.log('세션 삭제 성공!');
            res.redirect('/');
        }
    )
})

module.exports = router;