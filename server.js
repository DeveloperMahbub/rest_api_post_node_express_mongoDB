const express = require("express");
const mongose = require("mongoose");
const { MONGO_URI } = require("./config");

// For Cors
const cors = require("cors");
//Routes
const PostsRoutes = require("./routes/api/post");
const app = express();
app.use(cors());
//Bodyparser Middleware
app.use(express.json());
//Connect to MongoDB

mongose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//Use Routes

app.use("/api/posts", PostsRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run at ${PORT}`));
