const request = require('supertest');
const app = require('../app/server'); // Import the Express app

describe('API Endpoint Tests', () => {
  // Test for fetching all users
  it('should get list of users', async () => {
    const response = await request(app).get('/api/users');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    
  });

  // Test for fetching a user by ID
  it('should get a user by ID', async () => {
    const userId = userId; // 

    const response = await request(app).get(`/api/user/${id}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", userId);
   
  });

  // Test for handling user not found error
  it('should handle user not found error', async () => {
    const nonExistentUserID = 'nonexistentuserid';

    const response = await request(app).get(`/api/user/${nonExistentUserID}`);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error');
  
  });

});
