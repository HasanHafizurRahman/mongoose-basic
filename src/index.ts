import mongoose from "mongoose";
import express from "express";
// const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("Database connection successfully");
  } catch (error) {
    console.log(error);
  }
}
