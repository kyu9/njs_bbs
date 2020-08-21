let models = require('../models');
function enrollValidation(info,res){
    let responseData;
    models.user.findAll({
        where: {id: info.id}
    })
        .then(function(user){
            if(user.length!=0){
                responseData = {'result':'no','flag':'3'};
                res.send(responseData);
                return;
            }
            else{
                responseData = {'result':'ok'};
                res.send(responseData);
                models.User.create({
                    id: info.id,
                    name: info.name,
                    password: info.password,
                }).catch(function(err){
                    console.error(err);
                });
                return;
            }
        });
}
exports.enrollValidation = enrollValidation;
