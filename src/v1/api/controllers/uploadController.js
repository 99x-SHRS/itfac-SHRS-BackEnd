const db = require('../models')
const User = db.users
const RoomImage = db.roomimages

//update profile picture
const updateProfilePicture = async (req, res) => {
  let id = req.body.id
  let path = req.file.path

  await User.update({ image: path }, { where: { uId: id } })
    .then((response) => {
      console.log(response)
      if (response != 0) {
        res.status(200).send('Success')
      } else {
        res.status(200).send('Failed')
      }
    })
    .catch((err) => {
      res.status(500).send('Error')
    })
}

//delete profile picture
const deleteProfilePicture = async (req, res) => {
  let id = req.body.id
  let path = null

  await User.update({ image: path }, { where: { uId: id } })
    .then((response) => {
      if (response != 0) {
        res.status(200).send('Success')
      } else {
        res.status(200).send('Failed')
      }
    })
    .catch((err) => {
      res.status(500).send('Error')
    })
}

//add room images
const addRoomImage = async (req, res) => {
  let path = req.file.path
  let info = {
    roomRoomId: req.body.roomId,
    path: path,
  }
  await RoomImage.create(info)
    .then((image) => res.status(200).send(image))
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
}
// Get all room images
const getAllImages = async (req, res) => {
  await RoomImage.findAll({})
    .then((roomImages) => {
      res.status(200).send(roomImages)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

// Get all room images by room id
const getAllImagesByRoomId = async (req, res) => {
  let id = req.body.id
  await RoomImage.findAll({ where: { roomRoomId: id } })
    .then((roomImages) => {
      res.status(200).send(roomImages)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

//delete room image by image id
const deleteRoomImageById = async (req, res) => {
  let id = req.params.id
  console.log(id)
  await RoomImage.destroy({ where: { imageId: id } })
    .then((data) => {
      if (data != 0) {
        res.status(200).send('Success')
      } else {
        res.status(200).send('Error')
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
}
module.exports = {
  updateProfilePicture,
  deleteProfilePicture,
  addRoomImage,
  deleteRoomImageById,
  getAllImages,
  getAllImagesByRoomId,
}
