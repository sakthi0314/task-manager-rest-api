const express = require("express");
require("./db/mongoose");
require("dotenv").config();
const index = require("./routers/index");
const userRoutes = require("./routers/user");
const taskRoutes = require("./routers/task");

// initializing express
const app = express();

// Port
const port = 3000;

// Parse JSON
app.use(express.json());

// index route
app.use("/", index);

// user route's
app.use(userRoutes);

// task route's
app.use(taskRoutes);

// server up running
app.listen(port, () => console.log(`Server is up on port ${port}`));
