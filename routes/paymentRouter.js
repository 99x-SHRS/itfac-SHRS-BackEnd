const paymentController= require('../controllers/paymentController.js')

const router =require('express').Router()

router.post('/pay',paymentController.pay)
router.post('/getAllPayments',paymentController.getAllPayments)
router.post('/getAllPaymentsBycustomerId',paymentController.getAllPaymentsBycustomerId)
router.post('/getAllPaymentsBypaymentId',paymentController.getAllPaymentsBypaymentId)
router.post('/getAllPaymentsBybookingId',paymentController.getAllPaymentsBybookingId)

// router.post('/sendMessage',paymentController.sendMessage)




module.exports=router