

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('item', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
