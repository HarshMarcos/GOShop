const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connection successfull`);
  } catch (error) {
    console.log("Something Went Wrong :(");
    process.exit(0);
  }
};

module.exports = connectDb;
