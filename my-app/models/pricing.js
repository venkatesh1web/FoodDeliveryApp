

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('pricing', {
    zone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    base_distance_in_km: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    km_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    fix_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
};
