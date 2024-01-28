const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controller/tasks");

// 'router.route("/")' refers to the base route for tasks, meaning it handles requests to '/api/v1/tasks'.
router.route("/").get(getAllTasks).post(createTasks);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
