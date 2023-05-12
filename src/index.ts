import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose-basic");
    console.log("Database connection successfully");
  } catch (error) {
    console.log("Cannot connect database", error);
  }
}

connect();
