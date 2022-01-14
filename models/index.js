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
db.hotels= require('./hotelModel.js')(sequelize,DataTypes)
db.requests= require('./requestModel.js')(sequelize,DataTypes)
db.refferals= require('./refferalModel.js')(sequelize,DataTypes)
db.coupons= require('./couponModel.js')(sequelize,DataTypes)
db.rooms= require('./roomModel.js')(sequelize,DataTypes)
db.roomtypes= require('./roomtypeModel.js')(sequelize,DataTypes)
db.bookings= require('./bookingModel.js')(sequelize,DataTypes)

db.sequelize.sync({force:false})
// db.sequelize.sync({force:true})
.then(()=>{
    console.log('Yes,re-sync ...')
})

module.exports= db