module.exports=(sequelize,DataTypes)=>{
    const Role= sequelize.define("roles",{
        roleId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
        admin:{
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
        },
        hotelAdmin:{
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
        },
        customer:{
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
        },
       



    })
    return Role
}