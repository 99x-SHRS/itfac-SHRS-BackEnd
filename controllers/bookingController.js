const db= require('../models')
const Booking= db.bookings
const VAS= db.vas
const Hotel= db.hotels

//new booking
const booking = async(req,res) =>{

    let info={
        checkInDate:req.body.checkInDate,
        checkOutDate:req.body.checkOutDate,
        specialRequest:req.body.specialRequest,
        arrivalTime:req.body.arrivalTime,
        guestName:req.body.guestName,
        rentCar:req.body.rentCar,
        customerId:req.body.customerId,
        roomId:req.body.roomId,
    }
    let vasId= req.body.vasId
    let vasinfo = await VAS.findOne({ where: { vasId: vasId }})

    await Booking.create(info)
    .then(booking=>{
        booking.addVas(vasinfo)
        res.status(200).send(booking)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send(err)
    })

}

// Get all bookings
const getAllBookings = async (req, res) => {

    await Booking.findAll({
        include:[{
            model:VAS
        }]
    })
    .then(bookings=>res.status(200).send(bookings))
    .catch((err)=>{
        console.log(err)
        res.status(500).send(err)
    })

}

//Get booking by ID
const getBookingById= async (req, res) => {

    let id = req.body.id
    await Booking.findOne(
        { 
            where: { bookingId: id },
            include:[{
                model:VAS,               
                
            }]
        })
    .then(booking=>res.status(200).send(booking))
    .catch((err)=>{
        console.log(err)
        res.status(500).send(err)
    })

}

//  update booking by ID
const updateBookingById = async (req, res) => {

    let id = req.params.id
    await Booking.update(req.body, { where: { bookingId: id }})
    .then(booking=>res.status(200).send(booking))
    .catch((err)=>{
        console.log(err)
        res.status(500).send(err)
    })
   
}

//  Delete booking by ID
const deleteBookingByID = async (req, res) => {

    let id = req.params.id
    await Booking.destroy({ where: { bookingId: id }} )
    .then((booking)=>{
        if(booking!=0){
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

//add vas to bookings

const addVASToBooking = async(req,res) =>{

    let info={
        checkInDate:req.body.checkInDate,
        checkOutDate:req.body.checkOutDate,
        specialRequest:req.body.specialRequest,
        arrivalTime:req.body.arrivalTime,
        guestName:req.body.guestName,
        rentCar:req.body.rentCar,
        customerId:req.body.customerId,
    }
    let vasId= req.body.vasId
    let vasinfo = await VAS.findOne({ where: { vasId: vasId }})

    let bookingId= req.body.bookingId
    let bookinginfo = await Booking.findOne({ where: { bookingId: bookingId }})

// console.log(vasinfo)
// console.log(bookinginfo)
    await bookinginfo.addVas(vasinfo)
    .then((data)=>{  
        
        res.status(200).send("success")
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send(err)
    })

}



module.exports={
    booking,
    getAllBookings,
    getBookingById,
    updateBookingById,
    deleteBookingByID,
    addVASToBooking

}