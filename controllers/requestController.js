const { NOW } = require('sequelize');
var Sequelize = require('sequelize');
const db= require('../models')
const Op = Sequelize.Op;
const Request= db.requests

//send new request
const createRequest = async(req,res) =>{

    let info={
        description:req.body.description,
        isAccepted:req.body.isAccepted,      
        hotelAdminId:req.body.hotelAdminId
    }

    const user=await Request.create(info)
    .then(request=>res.status(200).send(request))
    .catch((err)=>{
        res.status(500).send(err)
    })

}
// Get all requests
const getAllRequest = async (req, res) => {

    let request = await Request.findAll({})
    res.status(200).send(request)

}

//Get message by request ID
const getRequestByRequestId = async (req, res) => {

    let id = req.body.id
    await Request.findAll({ where: { requetlId: id }})
    .then(request=>res.status(200).send(request))
    .catch(err=>console.log(err))


}
//Get message by hoteladmin ID
const getRequestByhotelAdminId = async (req, res) => {

    let id = req.body.id
    await Request.findAll({ where: { hotelAdminId: id }})
    .then(request=>res.status(200).send(request))
    .catch(err=>console.log(err))


}

//accept or reject account request
const acceptRequest = async(req,res)=>{

    let id= req.body.id
    let isAccepted= req.body.isAccepted
    await Request.update({isAccepted:isAccepted,responseAt:Sequelize.fn('NOW')}, { where: { requetlId: id }})
    .then(request=>res.status(200).send(request))
    .catch(err=>console.log(err))

}



module.exports={
    createRequest,
    getAllRequest,
    getRequestByRequestId,
    getRequestByhotelAdminId,
    acceptRequest
}