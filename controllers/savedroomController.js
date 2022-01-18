const db= require('../models')
const bcrpt = require('bcrypt')

const Saved_room= db.saved_room
const Room= db.rooms


//save room
const saveRoom = async (req, res) => {


    let info={
        customerId: req.body.customerId,
        roomId	: req.body.roomId
    }
    await Saved_room.create(info)
    .then((data)=>{
        console.log(data)
        res.status(200).send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(200).send(err)
    })

}

//reserver saved room
const reserveSavedBooking = async (req, res) => {


    let roomId=req.body.roomId
    let customerId=req.body.customerId

    await Room.findOne({ where: { roomId: roomId }})
    .then(async(room)=>{
        console.log(room);
        await Saved_room.destroy({ where: { roomId: roomId,customerId: customerId, }} )
        .then((data)=>{
        if(data!=0){
            res.status(200).send(room)
        }else{
            res.status(200).send('Error')
        }
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
//  Delete saved room by ID
const deleteSavedBookingByID = async (req, res) => {

    let roomId=req.body.roomId
    let customerId=req.body.customerId
    await Saved_room.destroy({ where: { roomId: roomId,customerId: customerId, }} )
    .then((data)=>{
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
    saveRoom,
    reserveSavedBooking,
    deleteSavedBookingByID
  
}