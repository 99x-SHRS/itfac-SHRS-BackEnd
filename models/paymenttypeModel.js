module.exports = (sequelize, DataTypes) => {
  const PaymentType = sequelize.define('paymenttype', {
    paymenttypeId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    paymentOption: {
      type: DataTypes.STRING,
    },
    couponId: {
      type: DataTypes.INTEGER,
      references: { model: 'coupons', key: 'couponId' },
      onDelete: 'CASCADE',
    },
  })
  return PaymentType
}
