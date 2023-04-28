const sequelize =require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: "USER", allowNull: false},
})

const People = sequelize.define('people',{
    id: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement:true},
    pib: {type: DataTypes.STRING, allowNull: false },
    date_of_birth: {type:DataTypes.DATE,allowNull:true},
    phone_number: {type: DataTypes.INTEGER,allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    job_date: {type: DataTypes.DATE,allowNull:false},
    away_date: {type: DataTypes.DATE,allowNull:true},
    reason_away: {type: DataTypes.STRING,allowNull:true}
})

User.hasMany(People)
People.belongsTo(User)

module.exports = {
    User,
    People
}