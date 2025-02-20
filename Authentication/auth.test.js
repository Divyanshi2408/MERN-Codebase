const authService = require('./auth.service');
const { expect } = require('chai');

describe('Auth Service', () => {
  it('should login successfully', async () => {
    const token = await authService.login('test@example.com', 'password123');
    expect(token).to.be.a('string');
  });

  it('should signup successfully', async () => {
    const user = await authService.signup('newuser@example.com', 'password123');
    expect(user.email).to.equal('newuser@example.com');
  });
});
