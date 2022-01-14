module.exports=(sequelize,DataTypes)=>{
    const Coupon= sequelize.define("coupon",{
        couponId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
        title:{
            type: DataTypes.STRING
        },
        token:{
            type: DataTypes.STRING
        },
        discount:{
            type: DataTypes.FLOAT
        },
        minimumTotal:{
            type: DataTypes.REAL
        },
        validDays:{
            type: DataTypes.INTEGER
        },
        hotelId:{
            type: DataTypes.INTEGER,
            references: { model: 'hotels', key: 'hotelId' }
        }

    })
    return Coupon
}