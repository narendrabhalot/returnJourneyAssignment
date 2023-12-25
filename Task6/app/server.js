const express = require('express');
const { getAllUsers, getUserById } = require('../routes/users');

const app = express();

// Define routes
app.get('/api/users', getAllUsers);
app.get('/api/user/:id', getUserById);

// Start the server
const PORT = process.env.PORT || 3000;

// Only start the server if the file is run directly (not imported)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app; // Export the app for testing purposes
