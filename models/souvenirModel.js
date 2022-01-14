module.exports=(sequelize,DataTypes)=>{
    const Souveniries= sequelize.define("souvenir",{
        
        souvenirId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
        title:{
            type: DataTypes.STRING
        },
        subTitle:{
            type: DataTypes.STRING                        
        },
        description:{
            type: DataTypes.STRING
        },
        image:{
            type: DataTypes.STRING
        },
        hotelId:{
            type: DataTypes.INTEGER,
            references: { model: 'hotels', key: 'hotelId' },
        }
       
       
    })
    return Souveniries
}