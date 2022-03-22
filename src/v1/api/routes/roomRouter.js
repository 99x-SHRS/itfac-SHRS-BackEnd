const roomController= require('../controllers/roomController.js')
const savedroomController= require('../controllers/savedroomController.js')

const router =require('express').Router()

router.post('/createRoom',roomController.createRoom)
router.get('/getAllRooms',roomController.getAllRooms)
router.post('/getRoomById',roomController.getRoomById)
router.post('/getRoomByHotelId',roomController.getRoomByHotelId)
router.post('/getRoomsByHotelIdAndRoomType',roomController.getRoomsByHotelIdAndRoomType)
router.put('/updateRoomById/:id',roomController.updateRoomById)
router.delete('/deleteRoomById/:id',roomController.deleteRoomById)

router.post('/saveRoom',savedroomController.saveRoom)
router.post('/reserveSavedBooking',savedroomController.reserveSavedBooking)
router.post('/getSavedRoomByCustomerId',savedroomController.getSavedRoomByCustomerId)
router.post('/deleteSavedBookingByID',savedroomController.deleteSavedBookingByID)

module.exports=router