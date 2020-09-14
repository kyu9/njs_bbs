import UserRepo from '../repositories/user.repository'

const enrollValidation = async (req, res, next) => {
    let responseData
    const userRepo = new UserRepo()
    try{
        const user = await userRepo.find(req.body.id)
        if(user) {
            responseData = {'result': 'no'}
            res.status(404).json(responseData)
        }else{
            await userRepo.enroll(req.body)
            responseData = {'result':'ok'}
            res.status(301).json(responseData)
        }
        next()
    }catch (e){
        responseData = {'result':'none'}
        res.status(400).json(responseData)
        next(e);
    }
}

export{
    enrollValidation
}
