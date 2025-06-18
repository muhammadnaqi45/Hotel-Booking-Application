const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const dbUrl = "mongodb+srv://ahmad5233388:B6kjf5to03oUaS5c@cluster0.xbxxzub.mongodb.net/?retryWrites=true&w=majority";

    await mongoose.connect(dbUrl, {
      // connectTimeoutMS: 3000, // Adjust the timeout as needed
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToDatabase;
