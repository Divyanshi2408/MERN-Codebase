const express = require("express");
const router = express.Router();
const asyncHandler = require("../utils/asyncHandler");
router.get("/", asyncHandler(async (req, res) => {
  res.json({ message: "Get all products" });
}));
module.exports = router;