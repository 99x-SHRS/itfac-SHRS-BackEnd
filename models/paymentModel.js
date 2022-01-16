module.exports=(sequelize,DataTypes)=>{

    const Payment=sequelize.define("payment",{
        paymentId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
        customerId:{
            type: DataTypes.INTEGER,
            references: { model: 'users', key: 'uId' },
        },
        paymenttypeId:{
            type: DataTypes.INTEGER,
            references: { model: 'paymenttypes', key: 'paymenttypeId' },
        } ,
        bookingId:{
            type: DataTypes.INTEGER,
            references: { model: 'bookings', key: 'bookingId' },
        },
        amount:{
            type: DataTypes.REAL,
        }      
       
       
    })
    return Payment
    
}