const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const { BOOLEAN } = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING(64), unique: true},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING(64)},  
    user_name: {type: DataTypes.STRING},
    post: {type: DataTypes.STRING},
    avatar_link: {type: DataTypes.STRING},
    online: {type: BOOLEAN}
},
{
    timestamps: false
})

const Channels = sequelize.define('channels', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    link: {type: DataTypes.STRING}
},
{
    timestamps: false
})

const Friends = sequelize.define('friends', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    avatar_link: {type: DataTypes.STRING},
    online: {type: BOOLEAN, defaultValue: false}
},
{
    timestamps: false
})

// Зависимости между таблицами

User.hasMany(Channels, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
// Friends принадлежит User
Channels.belongsTo(User)

// Одна сущность User содержит несколько сущностей Friends
User.hasMany(Friends, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
// Friends принадлежит User
Friends.belongsTo(User)

module.exports = {
    User,
    Channels,
    Friends
}