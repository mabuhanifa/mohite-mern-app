const express = require("express");
const Task = require("./models/taskModel");
require("dotenv").config();

const app = express();
const cors = require("cors");
const mongoose  = require("mongoose");
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

app.post(async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        task,
      },
    });
    console.log(user);
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
  console.log(` Server is running on port ${port}... `);
});
