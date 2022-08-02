const express = require("express");
const mongose = require("mongoose");

const { MONGO_URI } = require("./config");
const app = express();

//Connect to MongoDB

mongose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run at ${PORT}`));
