const customergradeController = require('../controllers/customergradeController.js')

const router = require('express').Router()
router.post('/getCustomerDiscount', customergradeController.getCustomerDiscount)

module.exports = router
