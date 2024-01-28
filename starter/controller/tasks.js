const { trusted } = require("mongoose");
const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTasks = asyncWrapper(async (req, res) => {
  // It's an asynchronous operation, so 'await' is used to wait for the result.
  // Task.create() method, which is likely a Mongoose method used for creating documents (records) in a MongoDB collection.
  const task = await Task.create(req.body);
  res.status(200).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  //  extract the value of the 'id' parameter from the 'req.params' object and assign it to a variable named 'taskID'
  const { id: taskID } = req.params;
  // const taskID = req.params.id;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  res.json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  res.status(200).status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
};
