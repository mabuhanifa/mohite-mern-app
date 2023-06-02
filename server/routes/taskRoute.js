const {
  getTasks,
  createTask,
  deleteTask,
} = require("../controllers/taskController");

const router = require("express").Router();

router.route("/").get(getTasks).post(createTask);
router.route("/:id").delete(deleteTask);

module.exports = router;
