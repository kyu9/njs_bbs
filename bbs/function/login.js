import UserRepo from '../repositories/user.repository'
import jwt from 'jsonwebtoken'

const login = async (req, res, next) => {
    let responseData
    try{
        const id = req.body.id
        const pwd = req.body.pwd
        const userRepo = new UserRepo()
        if(id){
            const user = await userRepo.find(id)
            if(user.dataValues.password == pwd){
                const payload = {id: user.dataValues.id, pwd: user.dataValues.password}
                const token = jwt.sign(payload, 'secret', {
                    expiresIn: '2h'
                })
                responseData = {'result':'ok'}
                res.cookie('user', token)
                res.status(301).json(responseData)
            }
            else{
                responseData = {'result': 'fail'}
                return res.status(302).json(responseData)
            }
        }else{
            responseData = {'result': 'none'}
            return res.status(400).json(responseData)
        }
    }catch (e){
        next(e)
    }
}

export{
    login
}
