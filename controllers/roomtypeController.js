const db= require('../models')
const Roomtypes= db.roomtypes

const createRoomtype= async(req,res)=>{

    let info={
        type:req.body.type,
        attributes:req.body.attributes,
        description:req.body.description,
        beds:req.body.beds,
        rent:req.body.rent,
        area:req.body.area

    }
    const roomType= await Roomtypes.create(info)
    res.status(200).send(roomType)
    console.log(roomType)

}

// Get all room types
const getAllRoomType = async (req, res) => {

    let roomtype = await Roomtypes.findAll({})
    res.status(200).send(roomtype)

}

//Get room by ID
const getRoomTypById = async (req, res) => {

    let id = req.body.id
    console.log(id)
    let room = await Roomtypes.findOne({ where: { roomTypeId: id }})
    res.status(200).send(room)

}

//  update room by ID
const updateRoomTypeById = async (req, res) => {

    let id = req.params.id
    await Roomtypes.update(req.body, { where: { roomTypeId: id }})
    .then((data)=>{
        console.log(data)
        res.status(200).send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(200).send(err)
    })
   
}

//  Delete roomType by ID
const deleteRoomTypeById = async (req, res) => {

    let id = req.params.id
    await Roomtypes.destroy({ where: { roomTypeId: id }} )
    .then((data)=>{
        console.log(data)
        if(data!=0){
            res.status(200).send('Success')
        }else{
            res.status(200).send('Error')
        }
    })
    .catch((err)=>{
        console.log(err)
        res.status(200).send(err)
    })  

}

module.exports={
    createRoomtype,
    getAllRoomType,
    getRoomTypById,
    updateRoomTypeById,
    deleteRoomTypeById

}