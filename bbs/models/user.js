module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id:{
            type: DataTypes.STRING(20),
            allowNull: false,
            primaryKey: true,
        },
        name:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        created_at:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('now()'),
        },
    },{
        timestamps:false,
    })

    return User
}