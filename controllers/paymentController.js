   
const e = require('cors')
const db= require('../models')
const VAS= db.vas
const Payments= db.payments
const Customergrade= db.customergrades
const Booking= db.bookings
const Room= db.rooms
var sequelize = require('sequelize');

const pay= async(req,res)=>{


    let data=await Booking.findOne({ where: { bookingId: req.body.bookingId },attributes:['customerid','roomId']})
    let roomRate=await Room.findOne({ where: { roomId: data.dataValues.roomId },attributes:['rate']})


  
    let vasTotal=  await Booking.findOne(
        { 
            where: { bookingId: req.body.bookingId },
            attributes:[[sequelize.fn('sum', sequelize.col('rate')), 'total']],
            group : ['bookingId'],
            include:[{
                model:VAS,                        
            }]
            
        })
        
    let info={
        customerId:data.dataValues.customerid,
        paymenttypeId:req.body.paymenttypeId,
        bookingId:req.body.bookingId,
        amount:(vasTotal.dataValues.total+roomRate.rate)
    }
    // console.log(vasTotal);
    console.log(roomRate.rate);
return

    await Payments.create(info)
    .then((data)=>{
        updateCustomerGrade(data)
        res.status(200).send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send(err)
    })


}

// Get all payments
const getAllPayments= async (req, res) => {

    let payments = await Payments.findAll({})
    res.status(200).send(payments)
}
//Get all payment by paymentId
const getAllPaymentsBypaymentId = async (req, res) => {

    let id = req.body.id
    let payments = await Payments.findOne({ where: { paymentId: id }})
    res.status(200).send(payments)

}

//Get all payment by customer id
const getAllPaymentsBycustomerId = async (req, res) => {

    let id = req.body.id
    let payments = await Payments.findOne({ where: { customerId: id }})
    res.status(200).send(payments)

}

//Get payment by bookingId
const getAllPaymentsBybookingId = async (req, res) => {

    let id = req.body.id
    let payments = await Payments.findOne({ where: { bookingId: id }})
    res.status(200).send(payments)

}

// update customer grade and add points
const updateCustomerGrade=(paymentDetails)=>{
    let amountToPoint =paymentDetails.amount/100
    Customergrade.findOne({where: { customerId: paymentDetails.customerId }})
    .then((data)=>{
        if(data==null){
            // new user -> create new customer grade
            let info={
                "points":amountToPoint,
                "rank":selectGrade(1000),
                "customerId":paymentDetails.customerId
            }
            Customergrade.create(info)
            .then((data)=>{
                console.log(data);
            })
        }else{
            console.log("Existing customer");
            let existingPoints =data.points
            let newPoints=existingPoints+amountToPoint
            let newRank =selectGrade(newPoints)
            Customergrade.update({rank:newRank,points:newPoints}, { where: { customerId: paymentDetails.customerId }})
            .then(data=>console.log(data))
            .catch(err=>console.log(err))

        }
    })
    
}

// is booking paid or not
const paymentStatusByBookingId= async (req, res) => {

    let id = req.body.id
    let payment = await Payments.findOne({ where: { bookingId: id }})
    .then(data=>{
        
        console.log(data);
        if (data!=null) {
            res.status(200).send("paid")
        }else{
            res.status(200).send("Not Paid")
        }
    })
    .catch(err=>console.log(err))
}
const totalAmountByBookingId= async(req,res)=>{


    let data=await Booking.findOne({ where: { bookingId: req.body.id },attributes:['customerid','roomId']})
    await Room.findOne({ where: { roomId: data.dataValues.roomId },attributes:['rate']})
    .then(async(roomRate)=>{
        let vasTotal=  await Booking.findOne(
            { 
                where: { bookingId: req.body.id },
                attributes:[[sequelize.fn('sum', sequelize.col('rate')), 'total']],
                group : ['bookingId'],
                include:[{
                    model:VAS,                        
                }]
                
           })
           console.log(vasTotal.dataValues.total+roomRate.rate);
           let amount=vasTotal.dataValues.total+roomRate.rate
           res.status(200).send(amount.toString())

    })
    .catch((err)=>{
        res.status(500).send(err)
    })
    

    

}

//select customer rank
const selectGrade = (points)=>{
 
    if(points<1000){
        return "Club Vision Red"
    }else if(points<2000){
        return "Bronze"
    }else if(points<3000){
        return "Brone"
    }else if(points<4000){
        return "Silver"
    }else if(points<5000){
        return "Gold"
    }else {
        return "Platinum"
    }

}



module.exports={
    pay,
    getAllPayments,
    getAllPaymentsBypaymentId,
    getAllPaymentsBycustomerId,
    getAllPaymentsBybookingId,
    paymentStatusByBookingId,
    totalAmountByBookingId


}
