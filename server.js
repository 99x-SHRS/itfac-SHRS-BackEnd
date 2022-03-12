const express = require('express')
const cors = require('cors')
const { urlencoded } = require('express')
const app = express()
require('dotenv').config()
var corOption = {
  origin: 'http://localhost:8000',
}

//middleware
app.use(cors(corOption))
app.use(express.json())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
app.use(express.urlencoded({ extended: true }))

//routers

const userRouter = require('./src/api/routes/userRouter.js')
const messageRouter = require('./src/api/routes/messageRouter.js')
const hotelRouter = require('./src/api/routes/hotelRouter.js')
const requestRouter = require('./src/api/routes/requestRouter.js')
const refferalRouter = require('./src/api/routes/refferalRouter.js')
const couponRouter = require('./src/api/routes/couponRouter.js')
const roomRouter = require('./src/api/routes/roomRouter.js')
const roomtypeRouter = require('./src/api/routes/roomtypeRouter.js')
const bookingRouter = require('./src/api/routes/bookingRouter.js')
const souvenirRouter = require('./src/api/routes/souvenirRouter.js')
const paymenttypeRouter = require('./src/api/routes/paymenttypeRouter.js')
const reviewRouter = require('./src/api/routes/reviewRouter.js')
const vasRouter = require('./src/api/routes/vasRouter.js')
const paymentRouter = require('./src/api/routes/paymentRouter.js')

//auth middleware
const authenticateToken =
  require('./src/auth/authentication.js').authenticateToken

//auth endpoints
app.use('/auth/user/', userRouter)

//api
app.use('/api/user', authenticateToken, userRouter)
app.use('/api/message', authenticateToken, messageRouter)
app.use('/api/hotel', authenticateToken, hotelRouter)
app.use('/api/request', authenticateToken, requestRouter)
app.use('/api/refferal', authenticateToken, refferalRouter)
app.use('/api/coupon', authenticateToken, couponRouter)
app.use('/api/room', authenticateToken, roomRouter)
app.use('/api/roomtype', authenticateToken, roomtypeRouter)
app.use('/api/booking', authenticateToken, bookingRouter)
app.use('/api/souvenir', authenticateToken, souvenirRouter)
app.use('/api/paymenttype', paymenttypeRouter)
app.use('/api/review', authenticateToken, reviewRouter)
app.use('/api/vas', authenticateToken, vasRouter)
app.use('/api/payment', authenticateToken, paymentRouter)

//test api
app.get('/', (req, res) => {
  res.json({ message: 'hello' })
})

//port
const PORT = process.env.PORT || 8000

//server
app.listen(PORT, () => {
  console.log(`server is running port ${PORT} `)
})
