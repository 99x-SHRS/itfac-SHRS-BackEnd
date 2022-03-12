module.exports=(sequelize,DataTypes)=>{

    const User=sequelize.define("user",{
        uId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
            validate: { isEmail: true }
        
        },
        contactNo:{
            type: DataTypes.STRING

        },
        firstName:{
            type: DataTypes.STRING
            
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false

        },
        password:{
            type: DataTypes.STRING,

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