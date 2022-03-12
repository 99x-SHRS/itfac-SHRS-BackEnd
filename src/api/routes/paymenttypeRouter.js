const paymenttypeController= require('../controllers/paymenttypeController.js')

const router =require('express').Router()

router.post('/addPaymentType',paymenttypeController.addPaymentType)
router.get('/getAllPaymenttTypes',paymenttypeController.getAllPaymenttTypes)
router.post('/getPaymentTypeById',paymenttypeController.getPaymentTypeById)
router.put('/updatPaymentTypeById/:id',paymenttypeController.updatPaymentTypeById)
router.delete('/deletePaymenTypeById/:id',paymenttypeController.deletePaymenTypeById)

module.exports=router