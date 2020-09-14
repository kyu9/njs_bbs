import jwt from 'jsonwebtoken'

exports.verifyToken = async(req, res, next) => {
    try{
            const clientToken = req.cookies.user
            const decoded = jwt.verify(clientToken, 'secret')
            if(decoded){
                res.locals.id = decoded.id
                console.log('jwt middleware를 거쳐갔습니다!')
                next()
            }else{
                res.status(401).json({err:'토큰에러'})
            }

    }catch(e){
        res.status(401).json({resultCode: 401, message: '토큰이 유효하지 않습니다.'})
    }
}