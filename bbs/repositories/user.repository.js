import models from '../models'

class UserRepository{
    constructor() {}

    async all(){
        const users = await models.user.findAll()
        return users
    }

    async find(id){
        let user = await models.user.findOne({
            where:{
                id: id
            }
        })
        return user
    }

    async paging(offset, limit){
        let result = await models.post.findAndCountAll({
            offset: offset,
            limit: limit
        })
        let data = {'rows':result.rows, 'count':result.count}
        return data;
    }

    async enroll(data){
        const user = await models.User.create({
            id: data.id,
            name: data.name,
            password: data.password,
        })
        return user
    }

    async writePost(title, content, id){
        const post = await models.post.create({
            title: title,
            content: content,
            uid: id,
        })
        return post
    }

    async writePostFile(title, content, id, file){
        const post = await models.post.create({
            title: title,
            content: content,
            uid: id,
            file: file
        })
        return post
    }
}

export default UserRepository