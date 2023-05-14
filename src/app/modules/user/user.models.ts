import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";

type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
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

// schema method
userSchema.method("fullName", function fullName() {
  return (
    this.name.firstName + " " + this.name.middleName + " " + this.name.lastName
  );
});

// create Model
const User = model<IUser, UserModel>("User", userSchema);

export default User;
