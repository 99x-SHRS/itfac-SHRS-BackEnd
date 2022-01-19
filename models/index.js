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
db.souveniries= require('./souvenirModel.js')(sequelize,DataTypes)
db.souveniries= require('./souvenirModel.js')(sequelize,DataTypes)
db.paymenttypes= require('./paymenttypeModel.js')(sequelize,DataTypes)
db.reviews= require('./reviewModel.js')(sequelize,DataTypes)
db.vas= require('./vasModel.js')(sequelize,DataTypes)
db.roominfo= require('./roominfoModel.js')(sequelize,DataTypes)
db.payments= require('./paymentModel.js')(sequelize,DataTypes)
db.customergrades= require('./customergradeModel.js')(sequelize,DataTypes)
db.customergrades= require('./customergradeModel.js')(sequelize,DataTypes)
db.roles= require('./roleModel.js')(sequelize,DataTypes)
db.saved_room= require('./savedroomModel.js')(sequelize,DataTypes)


//one-one associations
db.users.hasOne(db.roles,{
    foriegnKey:{
        type: DataTypes.INTEGER,
        allowNull:false
    }

})
db.roles.belongsTo(db.users)


//many-many associations
db.vas.belongsToMany(db.hotels, { through: 'Hotel_VAS' })
db.hotels.belongsToMany(db.vas, { through: 'Hotel_VAS' })

db.bookings.belongsToMany(db.vas, { through: 'Booking_VAS' })
db.vas.belongsToMany(db.bookings, { through: 'Booking_VAS' })

// db.roominfo.belongsTo(db.rooms)
// db.roominfo.belongsTo(db.hotels)
// db.roominfo.belongsTo(db.bookings)

db.bookings.belongsTo(db.rooms)
db.bookings.belongsTo(db.hotels)

db.rooms.belongsTo(db.hotels)
db.rooms.belongsTo(db.roomtypes)





db.sequelize.sync({force:false})
//db.sequelize.sync({force:true})
.then(()=>{
    console.log('re-synced ...')
})

module.exports= db