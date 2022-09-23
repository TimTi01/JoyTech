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
    online: {type: BOOLEAN, defaultValue: "false"}
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

const Message = sequelize.define('message', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.TEXT},
    time: {type: DataTypes.TIME},
},
{
    timestamps: false
})

const TypeFriends = sequelize.define('type_friends', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

// Зависимости между таблицами
 
User.belongsToMany(Friends, {through: TypeFriends})
Friends.belongsToMany(User, {through: TypeFriends})

Channels.hasMany(Message, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
}),
Message.belongsTo(Channels)

module.exports = {
    User,
    Channels,
    Friends,
    Message
}