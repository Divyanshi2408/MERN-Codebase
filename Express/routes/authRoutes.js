const express = require("express");
const router = express.Router();
const asyncHandler = require("../utils/asyncHandler");
router.post("/login", asyncHandler(async (req, res) => {
  res.json({ message: "User logged in" });
}));
module.exports = router;