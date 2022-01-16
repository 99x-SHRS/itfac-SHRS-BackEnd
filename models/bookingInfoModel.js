module.exports=(sequelize,DataTypes)=>{

    const BookingInfo=sequelize.define("bookinginfo",{

        bookingId:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false,
            references: { model: 'bookings', key: 'bookingId' },
        },
        roomId:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false,
            references: { model: 'rooms', key: 'roomId' },
        },        
        roomTypeId:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false,
            references: { model: 'roomtypes', key: 'roomTypeId' },
        },
       
    })
    return BookingInfo
}