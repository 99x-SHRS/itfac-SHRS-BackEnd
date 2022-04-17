module.exports = (sequelize, DataTypes) => {
  const Savedroom = sequelize.define('saved_hotel', {
    customerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: { model: 'users', key: 'uId' },
      onDelete: 'CASCADE',
    },
    roomId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: { model: 'hotels', key: 'hotelId' },
      onDelete: 'CASCADE',
    },
  })
  return Savedroom
}
