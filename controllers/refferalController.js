var Sequelize = require('sequelize');
const db= require('../models')
const Op = Sequelize.Op;
const Refferal= db.refferals


const createRefferal= async(req,res)=>{

    let info={
        token:req.body.token,
        userId:req.body.userId    
    }
    await Refferal.create(info)
    .then(refferal=>res.status(200).send(refferal))
    .catch(err=>res.status(500).send(err))    

}

const refferalValidate= async(req,res)=>{

    let token= req.query.token
    console.log(token)
    await Refferal.findOne({ where: { token: token }})
    .then((data)=>{
            console.log(data)
            if(data!=null){
                res.status(200).send("Valid")
            }else{
                res.status(200).send("Invalid")
            }
            
    })
    .catch((err)=>{
        res.status(200).send("Error")
    })


}
module.exports={
    createRefferal,
    refferalValidate
}