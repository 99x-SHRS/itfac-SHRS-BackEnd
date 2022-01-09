const userController= require('../controllers/messageController.js')

const router =require('express').Router()

router.post('/sendMessage',userController.sendMessage)

module.exports=router