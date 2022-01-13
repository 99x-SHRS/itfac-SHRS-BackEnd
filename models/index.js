const dbConfig= require('../config/dbConfig.js')

const {Sequelize ,DataTypes} = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorsAliases:false,
        pool:{
            max:dbConfig.max,
            min:dbConfig.min,
            acquire:dbConfig.acquire,
            idle:dbConfig.idle
        }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log('Connected......')
})
.catch(err=>{
    console.log('Error '+ err)
})

const db ={}

db.Sequelize= Sequelize
db.sequelize= sequelize

db.users= require('./userModel.js')(sequelize,DataTypes)
db.messages= require('./messageModel.js')(sequelize,DataTypes)

// one-one relationship betweeen user and message
// db.users.hasOne(db.messages)
// db.messages.belongsTo(db.users)

db.sequelize.sync({force:false})
.then(()=>{
    console.log('Yes,re-sync ...')
})

module.exports= db