let express = require('express')
let router = express.Router()
let app = express();
let path = require('path')
let models = require('../models')
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug')
function ensureAuthenticated(req, res, next) {

    if (req.isAuthenticated()) { return next(); }

    res.redirect('/');
}

router.get('/',ensureAuthenticated,function(req,res){
    models.User.findOne({
        where:{id: id}
    }).then(function(info){


            res.send(`
				<script>
				localStorage.login = true
				window.location.href ='/'
				</script>`)
            //res.redirect('/');

    })
})

module.exports = router;
