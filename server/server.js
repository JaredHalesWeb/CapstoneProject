// server/server.js

const express = require("express");
const connectDB = require("./config/db")
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static(path.join(__dirname, '../client/dist')))

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"))
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});