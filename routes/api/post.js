const express = require("express");
const router = express.Router();
const Posts = require("../../models/post");

// Post api for Create Post

router.post("/", async (req, res) => {
  const newPost = new Posts(req.body);

  try {
    const post = await newPost.save();
    if (!post) throw Error("Something went wrong while saving post");
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;