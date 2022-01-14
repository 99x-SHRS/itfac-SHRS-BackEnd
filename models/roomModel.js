module.exports=(sequelize,DataTypes)=>{
    const Room= sequelize.define("room",{
        
        roomId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
        roomNo:{
            type: DataTypes.STRING
        },
        description:{
            type: DataTypes.STRING
        },
        imges:{
            type: DataTypes.STRING
        },
        hotelId:{
            type: DataTypes.INTEGER,
            references: { model: 'hotels', key: 'hotelId' },
        }
    })
    return Room
}