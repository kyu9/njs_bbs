import UserRepo from '../repositories/user.repository'

const pagination = async (req, res, next) => {
    try{
        const userRepo = new UserRepo()
        let user = res.locals.id
        let pageNum = req.query.page
        let offset = 0
        const limit = 7
        if(pageNum>1){
            offset = limit * (pageNum - 1)
        }
        let data = await userRepo.paging(offset, limit)
        const posts = data.rows
        const count = data.count
        res.render('posts', {posts: posts, userid: user, pageNum: pageNum, count: count})
    }catch(e){
        next(e)
    }
}

export{
    pagination
}


