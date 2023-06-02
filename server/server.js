const express = require("express");
const Task = require("./models/taskModel");
require("dotenv").config();
const taskRoute = require("./routes/taskRoute");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Node Application Server Running");
});

app.use("/task", taskRoute);

app.patch("/task/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const task = await Task.updateOne({ _id: id }, data, {
      runValidators: true,
    });
    res.status(201).json({
      status: "success",
      data: {
        task,
      },
    });
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
