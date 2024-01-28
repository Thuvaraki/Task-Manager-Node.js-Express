const mongoose = require("mongoose");

// returns a promise
const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;

// while clone the project from github have to setup  .env
// MONGO_URI =   mongodb+srv://Thuva:7638@nodeexpressproject.rlw9nxr.mongodb.net/Task-Manager?retryWrites=true&w=majority
