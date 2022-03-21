const express = require('express')
const cors = require('cors')
const { urlencoded } = require('express')
const multer = require('multer')
const app = express()
require('dotenv').config()
var corOption = {
  origin: 'http://localhost:8000',
}

//middleware
app.use(cors())
app.use(express.json())

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads') //important this is a direct path fron our current file to storage location
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '--' + file.originalname)
  },
})

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
const facilityRouter = require('./src/api/routes/facilityRouter')
const facilitytypeRouter = require('./src/api/routes/facilitytypeRouter.js')
const uploadRouter = require('./src/api/routes/uplodsRoutes.js')

//auth middleware
const authenticateToken =
  require('./src/auth/authentication.js').authenticateToken
const upload = multer({ storage: fileStorageEngine })
//auth endpoints
app.use('/auth/user/', userRouter)

//api
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
app.use('/api/facility', facilityRouter)
app.use('/api/facilitytype', facilitytypeRouter)

//image uploads apis
app.use('/api/uploads', upload.single('image'), uploadRouter)

// Single File Route Handler
// app.use('/api/uploads', upload.single('image'), (req, res) => {
//   console.log(req.file)
//   res.send('Single FIle upload success')
// })

// Multiple Files Route Handler
// app.post('/multiple', upload.array('images', 3), (req, res) => {
//   console.log(req.files)
//   res.send('Multiple Files Upload Success')
// })

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
