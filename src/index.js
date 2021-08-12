const express = require("express");
const multer = require("multer");
require("./db/mongoose");
const userRoutes = require("./routers/user");
const taskRoutes = require("./routers/task");

// initializing express
const app = express();

// Port
const port = process.env.PORT;

// Parse JSON
app.use(express.json());

// user route's
app.use(userRoutes);

// task route's
app.use(taskRoutes);

// server up running
app.listen(port, () => console.log(`Server is up on port ${port}`));
