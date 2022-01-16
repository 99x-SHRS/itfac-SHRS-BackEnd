const db= require('../models')
const VAS= db.vas
const Hotel= db.hotels

const createVAS= async(req,res)=>{

    let info={
        name:req.body.name,
        rate:req.body.rate,
       
    }
    let hotelId= req.body.hotelId
    let hotelinfo = await Hotel.findOne({ where: { hotelId: hotelId }})
    await VAS.create(info)
    .then((vasinfo)=>{
       vasinfo.addHotel(hotelinfo)
       .then((data)=>{
        res.status(200).send(data)
       })
       .catch((err)=>{
        console.log(err)
        res.status(500).send(err)
    })

        
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send(err)
    })


}

// Get all VAS
const getAllVAS = async (req, res) => {

    let roomtype = await VAS.findAll({
        include:[{
            model:Hotel
        }]
    })
    res.status(200).send(roomtype)

}

//Get VAS by ID
const getVASById = async (req, res) => {

    let id = req.body.id
    console.log(id)
    let room = await VAS.findOne(
        {
            where: { vasId: id },
            include:[{
                model:Hotel,               
                
            }]
        }
        )
    res.status(200).send(room)

}

//  update VAS by ID
const updateVASById = async (req, res) => {

    let id = req.params.id
    await VAS.update(req.body, { where: { vasId: id }})
    .then((data)=>{
        console.log(data)
        res.status(200).send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(200).send(err)
    })
   
}

//  Delete VAS by ID
const deleteVASById = async (req, res) => {

    let id = req.params.id
    await VAS.destroy({ where: { vasId: id }} )
    .then((data)=>{
        console.log(data)
        if(data!=0){
            res.status(200).send('Success')
        }else{
            res.status(200).send('Error')
        }
    })
    .catch((err)=>{
        console.log(err)
        res.status(200).send(err)
    })  

}
//Get VAS by hotel ID
const getVASByHotelId = async (req, res) => {

    let id = req.body.id
    console.log(id)
    let room = await VAS.findAll(
        {
             include:[{
                model:Hotel,    
                where: { hotelId: id },           
                
            }]
        }
        )
    res.status(200).send(room)

}


module.exports={
    createVAS,
    getAllVAS,
    getVASById,
    updateVASById,
    deleteVASById,
    getVASByHotelId

}