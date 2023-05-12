import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();
// cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  // interface

  // creating schema using interface

  createModel();

  res.send("Hello World!");
});

export default app;
