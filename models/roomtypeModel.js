module.exports=(sequelize,DataTypes)=>{
    const Roomtypes= sequelize.define("roomtypes",{
        
        roomTypeId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
        type:{
            type: DataTypes.STRING
        },
        attributes:{
            type: DataTypes.JSON                        
        },
        description:{
            type: DataTypes.STRING
        },
        beds:{
            type: DataTypes.INTEGER
        },
        rent:{
            type: DataTypes.FLOAT
        },
        area:{
            type: DataTypes.FLOAT
        }
    })
    return Roomtypes
}