const  Sequelize  = require('sequelize')
const sequelize = new Sequelize('GROUPCHAT','root', 'Neeraj@9911',{
    dialect : 'mysql',
    host:'localhost'
});

module.exports = sequelize;