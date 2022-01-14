var Sequelize = require('sequelize');
const db= require('../models')
const Op = Sequelize.Op;
const Refferal= db.refferals


const createRefferal= async(req,res)=>{

    let info={
        notification:req.body.notification,
        type:req.body.type,
        from:req.body.from,
        to:req.body.to,
        mardRead:req.body.mardRead,
    }
    try{
        const message= await Message.create(info)
        res.status(200).send(message)
        console.log(message)
    }catch(e){
        res.send("Error")
        console.log("Error")
    }
    

}