const uploadController = require('../controllers/uploadController.js')

const router = require('express').Router()

//user routes
router.post('/profile-picture', uploadController.updateProfilePicture)
router.post('/profile-picture/delete', uploadController.deleteProfilePicture)

//room imges
router.post('/room', uploadController.addRoomImage)
router.get('/room/getAllImages', uploadController.getAllImages)
router.post('/room/getAllImagesByRoomId', uploadController.getAllImagesByRoomId)
router.delete('/room/delete/:id', uploadController.deleteRoomImageById)

module.exports = router
