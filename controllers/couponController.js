const db= require('../models')
const Coupon= db.coupons

const createCoupon= async(req,res)=>{
    let info={
        title:req.body.title,
        token:req.body.token,
        discount:req.body.discount,
        minimumTotal:req.body.minimumTotal,
        validDays:req.body.validDays,
        hotelId:req.body.hotelId
    }
    await Coupon.create(info)
    .then((data)=>{
        console.log(data)
        res.status(200).send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(200).send(err)
    })

}
// Get all coupons
const getAllCoupons = async (req, res) => {

    await Coupon.findAll({})
    .then((data)=>{
        console.log(data)
        res.status(200).send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(200).send(err)
    })

}

//Get coupon by coupon ID
const getCouponByCouponId = async (req, res) => {

    let id = req.body.couponId
    let coupon = await Coupon.findAll({ where: { couponId: id }})
    res.status(200).send(coupon)

}

// validate coupon
const validateCoupon = async (req, res) => {

    let coupon = req.body.coupon
    let data = await Coupon.findAll({ where: { token: coupon }})
    res.status(200).send(data)

}

//delete coupon by id
const deleteCouponById = async (req, res) => {

    let id = req.params.id
    const status =await Coupon.destroy({ where: { couponId: id }} )
    if(status!=0){
        res.status(200).send('Success')
    }else{
        res.status(200).send('Error')
    }
    
}
module.exports={
    createCoupon,
    getAllCoupons,
    getCouponByCouponId,
    validateCoupon,
    deleteCouponById
}