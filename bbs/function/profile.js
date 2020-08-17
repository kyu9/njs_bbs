var models = require('../models');

const showProfile = (...args) =>{
    let responseData;
    models.user.findOne({
        where:{
            id: args[0]
        }
    })
        .then((user)=>{
            responseData = {'result':'ok'};
            args[1](responseData);
        })
        .catch((err)=>{
            responseData = {'result':'none'};
            args[1](responseData);
        })
}


exports.showProfile = showProfile;