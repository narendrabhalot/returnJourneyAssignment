// Assuming you have an array of users or a database to fetch user data from
const users = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    // ... other user objects
  ];
  
  // Route handler for GET request to fetch all users
  const getAllUsers = (req, res) => {
    try {
      // In a real application, you might fetch users from a database
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Route handler for GET request to fetch a user by ID
  const getUserById = (req, res) => {
    const userId = req.params.id;
  
    try {
      // Find user by ID (assuming users are stored in an array)
      const user = users.find((user) => user.id === userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = {
    getAllUsers,
    getUserById,
  };
  