module.exports=(sequelize,DataTypes)=>{

    const User=sequelize.define("user",{
        uId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING
        
        },
        contactNo:{
            type: DataTypes.STRING

        },
        fName:{
            type: DataTypes.STRING
            
        },
        lName:{
            type: DataTypes.STRING,
            allowNull: false

        },
        province:{
            type: DataTypes.STRING,

        },
        district:{
            type: DataTypes.STRING

        },
        street1:{
            type: DataTypes.STRING

        },
        street2:{
            type: DataTypes.STRING

        },
        image:{
            type: DataTypes.STRING

        }
    })
    return User
}