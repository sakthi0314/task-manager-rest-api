const mongoose = require("mongoose");

mongoose.connect(process.env.mongo_connection, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
