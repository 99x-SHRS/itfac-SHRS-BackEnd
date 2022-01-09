const db= require('../models')

const Message= db.messages

const sendMessage= async(req,res)=>{

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
        res.send("Error occurerd.!")
        console.log("Error")
    }
    

}
module.exports={
    sendMessage
}