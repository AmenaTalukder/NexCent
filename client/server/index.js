const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv").config();

const authRoutes = require("./Authentication/auth");

const app = express();

app.use(
  cors({
    origin: ["https://nex-cent-navy.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
  })
);
app.use(express.json());
app.use(express.static("public"));

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGO_URL, { dbName: "Nexcent" })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.error("MongoDB connection error:", err));
