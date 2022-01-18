const hotelController= require('../controllers/hotelController.js')

const router =require('express').Router()

router.post('/registerHotel',hotelController.registerHotel)
router.get('/getAllHotels',hotelController.getAllHotels)
router.post('/getHotelById',hotelController.getHotelById)
router.put('/updateHotelById/:id',hotelController.updateHotelById)
router.delete('/deleteHotelById/:id', hotelController.deleteHotelById)
router.post('/getAllHotelsByProvince',hotelController.getAllHotelsByProvince)
router.post('/getAllHotelsByDistrict',hotelController.getAllHotelsByDistrict)
router.post('/search',hotelController.search)




module.exports=router