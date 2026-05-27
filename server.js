const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", require("./routes/productRoutes"));

app.get("/", (req, res) => {
  res.send("Welcome to Product API");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});