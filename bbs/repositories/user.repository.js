const model = require('../models')

store: async(data) => await model.User.create(data);
all: async() => await model.User.findAll();
find: async (id) => {
    return await model.User.findOne({
        where:{
            id
        }
    })
};
findById: async(id) => await model.User.findByPk(id);
export{
    store,
    all,
    find,
    findById
}