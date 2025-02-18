const bcrypt = require("bcryptjs");
const User = require("../database/userModel");

exports.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

exports.comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

exports.findUserByEmail = async (email) => {
  return await User.findOne({ email });
};
