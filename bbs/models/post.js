let moment = require('moment');
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('post', {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        uid:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        content:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        created_at:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('now()'),
        }
    },{
        timestamps: false,
    });
};