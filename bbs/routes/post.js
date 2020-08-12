var express = require('express')
let models = require('../models');
var axios = require('axios')
let router = express.Router()


router.get('/', async(req, res, next) => {
    try{
        //let id = axios.post('https://localhost:3000/post/curid')
        let id = req.body.id;

        console.log('HERE!!!!!!!!!!')
        console.log(id);
        var curpost = await models.post.findOne({
            where:{
                id: id
            }
        })
        res.render('post',{curpost:curpost});
    }catch(e){
        console.error(e);
        next(e);
    }
})


module.exports = router;