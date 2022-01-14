const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');
const app= express();

var corOption={
    origin:'http://localhost:8080'
};


//middleware
app.use(cors(corOption))
app.use(express.json())
app.use(express.urlencoded({extended:true}));

//routers

const userRouter= require('./routes/userRouter.js')
const messageRouter= require('./routes/messageRouter.js')
const hotelRouter= require('./routes/hotelRouter.js')
const requestRouter= require('./routes/requestRouter.js')
const refferalRouter= require('./routes/refferalRouter.js')


app.use('/api/users',userRouter)
app.use('/api/message',messageRouter)
app.use('/api/hotel',hotelRouter)
app.use('/api/request',requestRouter)
app.use('/api/refferal',refferalRouter)

//test api
app.get('/',(req,res)=>{
    res.json({message:"hello"})
});


//port
const PORT = process.env.PORT || 8000;

//server
app.listen(PORT,()=>{
    console.log(`server is running port ${PORT} `);
})