const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  event: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Log", logSchema);
