const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // const conn=await mongoose.connect("mongodb+srv://Nuha:nuhafour@turfcluster.6mdsi.mongodb.net/Turf-api?retryWrites=true&w=majority")
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/demo-database"
    );
    console.log("Connected to Mongo Db Successfully....");
  } catch (error) {
    console.log("error from mongodb");
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
