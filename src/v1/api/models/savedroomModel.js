module.exports=(sequelize,DataTypes)=>{
    const Savedroom= sequelize.define("saved_room",{
        
        customerId:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false,
            references: { model: 'users', key: 'uId' },
            onDelete: 'CASCADE',
        },
        roomId:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false,
            references: { model: 'rooms', key: 'roomId' },
            onDelete: 'CASCADE',
        }
      
      
       
    })
    return Savedroom
}