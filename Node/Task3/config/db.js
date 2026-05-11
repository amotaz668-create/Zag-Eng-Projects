const mongoose = require("mongoose");

const connectDB = async () => {
  const url = process.env.MONGO_URL;
  await mongoose.connect(url);
  console.log("Connected to MongoDB");
};

module.exports = connectDB;
