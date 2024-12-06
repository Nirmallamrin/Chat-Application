import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.MONGO);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("error", error);
  }
};

export default connect;
