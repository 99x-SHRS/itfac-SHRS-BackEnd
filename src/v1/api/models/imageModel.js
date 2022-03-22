module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('image', {
    imageId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    path: {
      type: DataTypes.STRING,
    },
  })
  return Image
}
