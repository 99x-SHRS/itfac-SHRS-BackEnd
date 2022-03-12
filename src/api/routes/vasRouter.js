const vasController= require('../controllers/vasController.js')

const router =require('express').Router()

router.post('/createVAS',vasController.createVAS)
router.get('/getAllVAS',vasController.getAllVAS)
router.post('/getVASById',vasController.getVASById)
router.put('/updateVASById/:id',vasController.updateVASById)
router.delete('/deleteVASById/:id',vasController.deleteVASById)
router.post('/getVASByHotelId',vasController.getVASByHotelId)


module.exports=router