#! /usr/bin/env node
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json("Hello, world!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000 http://localhost:3000");
  console.log("Server is running on port 3000");
});
