const express = require("express");
const Task = require("./models/taskModel");
require("dotenv").config();

const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Node Application Server Running");
});

app.post("/task", async (req, res) => {
  try {
    const { title, description, status, priority } = req.body;
    const task = await Task.create({ title, description, status, priority });
    res.status(201).json({
      status: "success",
      data: {
        task,
      },
    });
    console.log(task);
  } catch (error) {
    console.log(error);
  }
});

app.get("/task", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (error) {
    console.log(error);
  }
});

// database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`Database connection is successful 🛢`);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
