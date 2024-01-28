const mongoose = require("mongoose");

// returns a promise
const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
