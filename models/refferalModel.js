
module.exports=(sequelize,DataTypes)=>{

    const Refferal=sequelize.define("refferal",{

        refferalId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
        token:{
            type: DataTypes.STRING,
            allowNull:false
        },


    })
    return Refferal
}