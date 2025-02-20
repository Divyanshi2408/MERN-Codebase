const request = require('supertest');
const app = require('../app'); // Assuming the main app file

describe('POST /login', () => {
  it('should return a token for valid credentials', async () => {
    const response = await request(app)
      .post('/login')
      .send({ email: 'test@example.com', password: 'password123' });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});

describe('POST /signup', () => {
  it('should return success message for new user', async () => {
    const response = await request(app)
      .post('/signup')
      .send({ email: 'newuser@example.com', password: 'password123' });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('User created successfully!');
  });
});
