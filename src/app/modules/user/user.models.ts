import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  dateOfBirth: { type: String, required: true },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  email: { type: String },
  address: { type: String, required: true },
});

// create Model
const User = model<IUser>("User", userSchema);

export default User;
