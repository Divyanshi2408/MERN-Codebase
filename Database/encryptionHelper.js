const crypto = require("crypto");
const secretKey = process.env.SECRET_KEY || "default_secret_key";

exports.encrypt = (text) => {
  const cipher = crypto.createCipher("aes-256-cbc", secretKey);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
};

exports.decrypt = (encryptedText) => {
  const decipher = crypto.createDecipher("aes-256-cbc", secretKey);
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};
