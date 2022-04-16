const bookingController = require('../controllers/bookingController.js')

const router = require('express').Router()

router.post('/', bookingController.booking)
router.get('/getAllBookings', bookingController.getAllBookings)
router.post('/getBookingById', bookingController.getBookingById)
router.post('/getBookingByUserId', bookingController.getBookingByUserId)
router.post(
  '/getCurrentBookingByUserId',
  bookingController.getCurrentBookingByUserId
)
router.post('/getPastBookingByUserId', bookingController.getPastBookingByUserId)
router.put('/updateBookingById/:id', bookingController.updateBookingById)
router.delete('/deleteBookingByID/:id', bookingController.deleteBookingByID)

router.post('/addVASToBooking', bookingController.addVASToBooking)

module.exports = router
