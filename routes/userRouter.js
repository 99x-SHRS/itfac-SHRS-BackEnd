const userController= require('../controllers/userController.js')

const router =require('express').Router()

router.post('/addUser',userController.addUser)
router.get('/getAllUsers',userController.getAllUser)
router.post('/getUserById',userController.getUserById)
router.put('/updateUserById/:id', userController.updateUserById)
router.delete('/deleteUserById/:id', userController.deleteUserById)

module.exports=router
