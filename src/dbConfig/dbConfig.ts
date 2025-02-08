import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_CONNECTION!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected");
    });

    connection.on("error", (err) => {
      console.log("MongoDB connection error" + err);
      process.exit();
    });
  } catch (err) {
    console.log("Something went wrong in connecting to DB");
    console.log(err);
  }
}
