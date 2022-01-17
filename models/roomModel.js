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
        images:{
            type: DataTypes.STRING
        },
        rate:{
            type: DataTypes.FLOAT
        },
        hotelId:{
            type: DataTypes.INTEGER,
            references: { model: 'hotels', key: 'hotelId' },
            onDelete: 'CASCADE',
        },
        roomTypeId:{
            type: DataTypes.INTEGER,
            references: { model: 'roomtypes', key: 'roomTypeId' },
            onDelete: 'CASCADE',
        }
    })
    return Room
}