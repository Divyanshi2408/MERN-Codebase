const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./authentication/authRoutes");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/auth", authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
