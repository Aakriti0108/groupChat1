const express = require('express')
const chats = express();

const cors = require('cors')
const bodyparser = require('body-parser')
const sequelize = require('./util/database')

const userRoutes = require('./routes/chats')

const UserModel = require('./models/user')
const ChatModel = require('./models/message')
const Group = require('./models/group')
const userGroup = require('./models/userGroup');

chats.use(cors())

chats.use(bodyparser.json())

chats.use(userRoutes)


UserModel.hasMany(ChatModel)
ChatModel.belongsTo(UserModel)


UserModel.hasMany(userGroup)
Group.hasMany(userGroup)

Group.hasMany(ChatModel)
ChatModel.belongsTo(Group)

userGroup.belongsTo(UserModel)
userGroup.belongsTo(Group)


sequelize
//.sync({force:true})
.sync()
.then(result=>{
    chats.listen(3000)
})
.catch(err=>
    console.log(err))