const db= require('../models')
const Review= db.reviews

const createReview = async(req,res) =>{

    let info={
        review:req.body.review,
        hotelId:req.body.hotelId,      
        customerId:req.body.customerId
    }

    await Review.create(info)
    .then(review=>res.status(200).send(review))
    .catch((err)=>{
        res.status(500).send(err)
        console.log(err)
    })

}


// Get all reviews
const getAllReviews = async (req, res) => {

    await Review.findAll({})
    .then((data)=>{
        console.log(data)
        res.status(200).send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send(err)
    })

}

//Get review by  ID
const getReviewById = async (req, res) => {

    let id = req.body.id
    console.log(id)
    await Review.findAll({ where: { reviewId: id }})
    .then((data)=>{
        console.log(data)
        res.status(200).send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(200).send(err)
    })

}
//  update room by ID
const updateReviewById = async (req, res) => {

    let id = req.params.id
    await Review.update(req.body, { where: { reviewId: id }})
    .then((data)=>{
        console.log(data)
        res.status(200).send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(200).send(err)
    })
   
}
//  Delete Review by ID
const deleteReviewById = async (req, res) => {

    let id = req.params.id
    await Review.destroy({ where: { reviewId: id }} )
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

//Get review by  hotel ID
const getReviewByHotelId = async (req, res) => {

    let id = req.body.id
    console.log(id)
    await Review.findAll({ where: { hotelId: id }})
    .then((data)=>{
        console.log(data)
        res.status(200).send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(200).send(err)
    })

}

//Get review by  cunstomer ID
const getReviewByCustomerId = async (req, res) => {

    let id = req.body.id
    console.log(id)
    await Review.findAll({ where: { customerId: id }})
    .then((data)=>{
        console.log(data)
        res.status(200).send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(200).send(err)
    })

}

//Get review by  cunstomer ID and  hotel id
const getReviewByCustomerIdAndHotelId = async (req, res) => {

    let hotelId = req.body.hotelId
    let customerId = req.body.customerId
    await Review.findAll({ where: { customerId: customerId ,hotelId: hotelId }})
    .then((data)=>{
        console.log(data)
        res.status(200).send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(200).send(err)
    })

}
module.exports={
    createReview,
    getAllReviews,
    getReviewById,
    updateReviewById,
    deleteReviewById,
    getReviewByHotelId,
    getReviewByCustomerId,
    getReviewByCustomerIdAndHotelId

}