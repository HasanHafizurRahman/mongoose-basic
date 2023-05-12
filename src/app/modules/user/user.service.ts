import User from "./user.models";

export const createUserToDB = async () => {
  const user = await new User({
    id: "62727",
    role: "student",
    password: "hsjssksjs",
    name: {
      firstName: "Hasan",
      middleName: "Hafizur",
      lastName: "Rahman",
    },
    dateOfBirth: "12 dec, 2001",
    gender: "male",
    email: "hajsns@gmail.com",
    contactNo: "738288",
    emergencyContactNo: "7737eeh",
    address: "kulauryhsh",
  });
  await user.save();
  return user;
};
