

const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const pricingService = require('./services/pricingService');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/calculate-price', async (req, res) => {
  try {
    const { zone, organization_id, total_distance, item_type } = req.body;

    // Call pricing service to calculate price
    const totalPrice = await pricingService.calculatePrice(zone, organization_id, total_distance, item_type);

    res.json({ total_price: totalPrice });
  } catch (error) {
    console.error('Error calculating price:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Sync database
sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => {
  console.error('Error syncing database:', err);
});
