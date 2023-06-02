const {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

const router = require("express").Router();

router.route("/").get(getTasks).post(createTask);

router.route("/:id").delete(deleteTask).patch(updateTask);

module.exports = router;
