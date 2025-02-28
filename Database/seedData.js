const User = require("../models/User");

const seedUsers = async () => {
  const users = [
    { name: "Admin", email: "admin@example.com", password: "123456", role: "admin" },
    { name: "User", email: "user@example.com", password: "123456", role: "user" },
  ];

  await User.insertMany(users);
  console.log("✅ Users Seeded Successfully!");
};

module.exports = seedUsers;
