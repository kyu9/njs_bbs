module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('comment', {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        pid:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        uid:{
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