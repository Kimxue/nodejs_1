// Import Express
const express = require('express');
const app = express();

// Set up a simple route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World! Welcome to my Node.js website.');
});

// Start the server and listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
