const mongoose = require("mongoose");
const { connectionURL } = require("../config/config");

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
