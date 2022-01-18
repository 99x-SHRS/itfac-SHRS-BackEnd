const db= require('../models')
const Room= db.rooms



const createRoom = async(req,res) =>{

    let info={
        roomNo:req.body.roomNo,
        description:req.body.description,   
        rate:req.body.rate,    
        qty:req.body.qty,  
        images:req.body.images,   
        hotelId:req.body.hotelId,
        roomTypeId:req.body.roomTypeId
    }

const room=  await Room.create(info)
    .then(room=>res.status(200).send(room))
    .catch((err)=>{
        res.status(500).send(err)
        console.log(err)
    })

}

// Get all rooms
const getAllRooms = async (req, res) => {

    await Room.findAll({})
    .then((data)=>{
        console.log(data)
        res.status(200).send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send(err)
    })

}

//Get room by room ID
const getRoomById = async (req, res) => {

    let id = req.body.id
    console.log(id)
    await Room.findAll({ where: { roomId: id }})
    .then((data)=>{
        console.log(data)
        res.status(200).send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send(err)
    })

}
//Get room by hotel ID
const getRoomByHotelId = async (req, res) => {

    let id = req.body.id
    console.log(id)
    await Room.findAll({ where: { hotelId: id }})
    .then((data)=>{
        console.log(data)
        res.status(200).send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send(err)
    })
}
//Get room by hotel ID and room type
const getRoomsByHotelIdAndRoomType = async (req, res) => {

    let hotelId = req.body.hotelId
    let roomTypeId = req.body.roomTypeId
    await Room.findAll({ where: { hotelId: hotelId ,roomTypeId:roomTypeId}})
    .then((data)=>{
        console.log(data)
        res.status(200).send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send(err)
    })
}
//  update room by ID
const updateRoomById = async (req, res) => {

    let id = req.params.id
    await Room.update(req.body, { where: { roomId: id }})
    .then((data)=>{
        console.log(data)
        res.status(200).send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send(err)
    })
   
}
//  Delete room by ID
const deleteRoomById = async (req, res) => {

    let id = req.params.id
    await Room.destroy({ where: { roomId: id }} )
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
        res.status(500).send(err)
    })
   
    

}



module.exports={
    createRoom,
    getAllRooms,
    getRoomById,
    updateRoomById,
    deleteRoomById,
    getRoomByHotelId,
    getRoomsByHotelIdAndRoomType

}