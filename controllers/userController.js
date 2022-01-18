const db= require('../models')
const bcrpt = require('bcrypt')

const User= db.users
const Role= db.roles

// Add user
const addUser= async(req,res)=>{

    //bcrtpy password

    const salt= await bcrpt.genSalt()
    const hashedPassword = await bcrpt.hash(req.body.password,salt)


    let info={
        email:req.body.email,
        contactNo:req.body.contactNo,
        firstName:req.body.fName,
        lastName:req.body.lName,
        password:hashedPassword,
        province:req.body.province,
        district:req.body.district,
        street1:req.body.street1,
        street2:req.body.street2,
        image:req.body.image,

    }
    let roleInfo={
        admin:0,
        hotelAdmin:0,
        customer:1,

    }
   await User.create(info)
   .then((user)=>{
       user.createRole(roleInfo)
       .then((data)=>{
        res.status(200).send(user)
       })
       .catch((err)=>{
        console.log(err)
        res.status(500).send(err)
    })
       
       
   })
    .catch((err)=>{
        console.log(err)
        res.status(500).send(err)
    })

}

const login= async (req,res)=>{

    let email =req.body.email
    let password =req.body.password
    await User.findOne({ where: { email: email }})
    .then(async(user)=>{
        if (user==null) {
            res.status(200).send("Cannot find user")
        }else{
            if (await bcrpt.compare(password,user.password)) {
                res.status(200).send("Success")
            }else{
                res.status(200).send("Failed")
            }
    
        }
       })
    .catch((err)=>{
        console.log(err)
        res.status(500).send(err)
    })
   

}

// Get all users
const getAllUser = async (req, res) => {

    let users = await User.findAll({
        include:[{
            model:Role
        }]
    })
    res.status(200).send(users)
    

}

//Get user by ID
const getUserById = async (req, res) => {

    let id = req.body.id
    let user = await User.findOne(
        {
            where: { uId: id },
            include:[{
                model:Role,               
                
            }]
       
    })
    res.status(200).send(user)

}

//  update user by ID

const updateUserById = async (req, res) => {

    let id = req.params.id
    const user = await User.update(req.body, { where: { uId: id }})
    res.status(200).send(user)
   
}

//  Delete user by ID
const deleteUserById = async (req, res) => {

    let id = req.params.id
    const status =await User.destroy({ where: { uId: id }} )
    .then((data)=>{

        if(status!=0){
            res.status(200).send('Success')
        }else{
            res.status(200).send('Error')
        }
        
    })
    .catch((err)=>{
        res.status(200).send(err)
    })
  

}

module.exports={
    addUser,
    login,
    getAllUser,
    getUserById,
    updateUserById,
    deleteUserById
}