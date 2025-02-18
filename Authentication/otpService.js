const otpGenerator = require("otp-generator");
const otpStorage = new Map(); // Temporary storage, replace with DB in production

exports.generateOTP = (email) => {
  const otp = otpGenerator.generate(6, { digits: true, alphabets: false, specialChars: false });
  otpStorage.set(email, otp);
  setTimeout(() => otpStorage.delete(email), 300000); // OTP expires in 5 minutes
  return otp;
};

exports.verifyOTP = (email, enteredOtp) => {
  const storedOtp = otpStorage.get(email);
  if (storedOtp === enteredOtp) {
    otpStorage.delete(email);
    return true;
  }
  return false;
};
