const mongoose = require("mongoose");

const options = {
  poolSize: 10, // Maintain up to 10 connections
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGO_URI, options);

mongoose.connection.on("connected", () => console.log("MongoDB Connected"));
mongoose.connection.on("error", (err) => console.error("MongoDB Connection Error:", err));

module.exports = mongoose;
