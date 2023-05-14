import express from "express";
import { createUser, getUserById, getusers } from "./user.controller";

const router = express.Router();

router.get("/", getusers);
router.get("/:id", getUserById);
router.post("/create-user", createUser);

export default router;
