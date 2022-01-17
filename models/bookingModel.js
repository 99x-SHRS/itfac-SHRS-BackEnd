module.exports=(sequelize,DataTypes)=>{
    const Booking= sequelize.define("bookings",{
        bookingId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
        checkInDate:{
            type: DataTypes.DATE
        },
        checkOutDate:{
            type: DataTypes.DATE
        },
        specialRequest:{
            type: DataTypes.TEXT
        },
        arrivalTime:{
            type: DataTypes.DATE
        },
        guestName:{
            type: DataTypes.STRING
        },
        rentCar:{
            type: DataTypes.BOOLEAN
        },
        customerId:{
            type: DataTypes.INTEGER,
            references: { model: 'users', key: 'uId' },   
            onDelete: 'CASCADE',         
        },
        roomId:{
            type: DataTypes.INTEGER,
            references: { model: 'rooms', key: 'roomId' },
            onDelete: 'CASCADE',
        }



    })
    return Booking
}