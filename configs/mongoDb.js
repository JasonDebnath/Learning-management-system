import mongoose, { mongo } from "mongoose";

// connect to the mongodb database
const connectDb = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database connected");
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/lms`);
};

export default connectDb;
