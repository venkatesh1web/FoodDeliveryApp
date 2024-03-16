

const { Pricing } = require('../models');

async function calculatePrice(zone, organization_id, total_distance, item_type) {
  // Retrieve pricing information based on zone and organization_id
  const pricing = await Pricing.findOne({
    where: {
      organization_id,
      zone,
    },
  });

  if (!pricing) {
    throw new Error('Pricing information not found');
  }

  // Calculate total price based on distance and item type
  let totalPrice = pricing.fix_price;
  if (total_distance > pricing.base_distance_in_km) {
    totalPrice += (total_distance - pricing.base_distance_in_km) * pricing.km_price;
  }

  // Adjust price based on item type (perishable or non-perishable)
  if (item_type === 'perishable') {
    totalPrice *= 1.5; // Adjust price for perishable items
  }

  return totalPrice * 100; // Convert price to cents
}

module.exports = {
  calculatePrice,
};
