const express = require('express');
const FluxFlowAssistant = require('./src/assistant');

const app = express();
const port = process.env.PORT || 8080;

// Main API Route
app.get('/', (req, res) => {
  const result = FluxFlowAssistant.getRecommendation('G1');
  res.json(result);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
