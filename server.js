const express = require('express')
const cors = require('cors')
const { urlencoded } = require('express')
const app = express()

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
const userRouter = require('./routes/userRouter.js')
const messageRouter = require('./routes/messageRouter.js')
const hotelRouter = require('./routes/hotelRouter.js')
const requestRouter = require('./routes/requestRouter.js')
const refferalRouter = require('./routes/refferalRouter.js')
const couponRouter = require('./routes/couponRouter.js')
const roomRouter = require('./routes/roomRouter.js')
const roomtypeRouter = require('./routes/roomtypeRouter.js')
const bookingRouter = require('./routes/bookingRouter.js')
const souvenirRouter = require('./routes/souvenirRouter.js')
const paymenttypeRouter = require('./routes/paymenttypeRouter.js')
const reviewRouter = require('./routes/reviewRouter.js')
const vasRouter = require('./routes/vasRouter.js')
const paymentRouter = require('./routes/paymentRouter.js')

app.use('/api/users', userRouter)
app.use('/api/message', messageRouter)
app.use('/api/hotel', hotelRouter)
app.use('/api/request', requestRouter)
app.use('/api/refferal', refferalRouter)
app.use('/api/coupon', couponRouter)
app.use('/api/room', roomRouter)
app.use('/api/roomtype', roomtypeRouter)
app.use('/api/booking', bookingRouter)
app.use('/api/souvenir', souvenirRouter)
app.use('/api/paymenttype', paymenttypeRouter)
app.use('/api/review', reviewRouter)
app.use('/api/vas', vasRouter)
app.use('/api/payment', paymentRouter)

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
