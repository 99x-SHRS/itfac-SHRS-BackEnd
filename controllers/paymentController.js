const db= require('../models')
const VAS= db.vas
const Payments= db.payments

const pay= async(req,res)=>{

    let info={
        customerId:req.body.customerId,
        paymenttypeId:req.body.paymenttypeId,
        bookingId:req.body.bookingId,
        amount:req.body.amount,
       
    }
   
    await Payments.create(info)
    .then((data)=>{
     
        console.log(data)
        res.status(500).send(data)
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


module.exports={
    pay,
    getAllPayments,
    getAllPaymentsBypaymentId,
    getAllPaymentsBycustomerId,
    getAllPaymentsBybookingId

}