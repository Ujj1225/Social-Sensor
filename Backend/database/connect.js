const mongoose = require("mongoose");

const connectDB = (uri) => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((error) => {
      console.log("Error occured while trying to connect to the database!");
    });
};

module.exports = connectDB;
