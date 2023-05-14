import { NextFunction, Request, Response } from "express";
import {
  createUserToDB,
  getUserByIdFromDb,
  getUsersToDB,
} from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUserToDB(data);

  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getusers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getUsersToDB();

  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const user = await getUserByIdFromDb(id);

  res.status(200).json({
    status: "success",
    data: user,
  });
};
