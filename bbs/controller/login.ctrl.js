const userRepo = require('../repositories/user.repository')
const createError = require('http-errors');

const post = async (req, res, next) => {
    try{
        if(req.params.id){
            const userid = await userRepo.find(req.params.id)

            if(!user){
                throw (createError(httpStatus.NOT_FOUND, '아이디가 없습니다!'))
            }
            if(req.params.password){
                const userpw = await userRepo.find(req.params.password)
                console.log('성공!');
            }

            return res
                .status(httpStatus.OK)
                .json(user)
        }else{
            const users = await userRepo.all()
            return res.json(users)
        }

    }catch (e){
        next(e);
    }
}

module.exports = {
    post
}