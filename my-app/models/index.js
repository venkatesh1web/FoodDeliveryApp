

const Sequelize = require('sequelize');
const OrganizationModel = require('./organization');
const ItemModel = require('./item');
const PricingModel = require('./pricing');

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'postgres',
  host: 'localhost',
});

const Organization = OrganizationModel(sequelize, Sequelize);
const Item = ItemModel(sequelize, Sequelize);
const Pricing = PricingModel(sequelize, Sequelize);

Organization.hasMany(Pricing);
Pricing.belongsTo(Organization);
Item.hasMany(Pricing);
Pricing.belongsTo(Item);

module.exports = {
  sequelize,
  Organization,
  Item,
  Pricing,
};
