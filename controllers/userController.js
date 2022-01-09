const db= require('../models')

const User= db.users

// Add user
const addUser= async(req,res)=>{

    let info={
        email:req.body.email,
        contactNo:req.body.contactNo,
        fName:req.body.fName,
        lName:req.body.lName,
        province:req.body.province,
        district:req.body.district,
        street1:req.body.street1,
        street2:req.body.street2,
        image:req.body.image,

    }
    const user= await User.create(info)
    res.status(200).send(user)
    console.log(user)

}

// Get all users
const getAllUser = async (req, res) => {

    let users = await User.findAll({})
    res.status(200).send(users)

}

//Get user by ID
const getUserById = async (req, res) => {

    let id = req.body.id
    console.log(id)
    let user = await User.findOne({ where: { uId: id }})
    res.status(200).send(user)

}

//  update user by ID

const updateUserById = async (req, res) => {

    let id = req.params.id
    console.log(req.body)
    const user = await User.update(req.body, { where: { uId: id }})
    res.status(200).send("Successfully updated")
   
}

//  Delete user by ID
const deleteUserById = async (req, res) => {

    let id = req.params.id
    await User.destroy({ where: { uId: id }} )
    res.status(200).send('User is deleted !')

}
module.exports={
    addUser,
    getAllUser,
    getUserById,
    updateUserById,
    deleteUserById
}