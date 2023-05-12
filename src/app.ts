import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";
import userRouter from "./app/modules/user/user.routes";

const app: Application = express();
// cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);

export default app;
