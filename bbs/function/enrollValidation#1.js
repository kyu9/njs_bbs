async function enrollValidation(User){
    try{
        let user = await User.findAll({
            where: {id: User.id}
        })
            .then(function(user){
                if(user.length!=0){

                }else{

                }
            })

    }catch(e){
        console.error(e);
    }

}
exports.enrollValidation = enrollValidation;
