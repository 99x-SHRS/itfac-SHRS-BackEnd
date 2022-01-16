module.exports=(sequelize,DataTypes)=>{

    const Review=sequelize.define("review",{
        reviewId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
        review:{
            type: DataTypes.STRING
        },
        hotelId:{
            type: DataTypes.INTEGER,
            references: { model: 'hotels', key: 'hotelId' },
        },
        customerId:{
            type: DataTypes.INTEGER,
            references: { model: 'users', key: 'uId' },
        },
       
       
    })
    return Review
}