const moment = require('moment');

module.exports = (sequelize, DataTypes)=>{
    const Comment = sequelize.define('comment', {
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
        userid:{
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
            get() {
                return moment(this.getDataValue('created_at')).format('YYYY/MM/DD h:mm:ss a');
            }
        }
    },{
        timestamps: false,
    });

    return Comment
};