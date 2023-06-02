const Task = require("../models/taskModel");

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (error) {
    console.log(error);
  }
};

const createTask = async (req, res) => {
  try {
    const { title, description, status, date } = req.body;
    const task = await Task.create({ title, description, status, date });
    console.log(task);
    res.status(201).json({
      status: "success",
      data: {
        task,
      },
    });
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const tasks = await Task.deleteOne({ _id: req.params.id });
    res.send(tasks);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTasks, createTask, deleteTask };
