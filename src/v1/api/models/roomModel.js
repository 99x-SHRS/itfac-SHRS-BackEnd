module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('room', {
    roomId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    roomNo: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    rate: {
      type: DataTypes.FLOAT,
    },
    persons: {
      type: DataTypes.INTEGER,
    },
    availableQty: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    // roomTypeId:{
    //     type: DataTypes.INTEGER,
    //     references: { model: 'roomtypes', key: 'roomTypeId' },
    //     onDelete: 'CASCADE',
    // }
  })
  return Room
}
