const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be provided"],
    trim: true,
    maxlength: [20, " name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// "model" is a construct that allows you to interact with a MongoDB collection.
module.exports = mongoose.model("Task", TaskSchema);
