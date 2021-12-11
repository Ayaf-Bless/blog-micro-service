const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});
app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comment = commentsByPostId[req.params.id] || [];
  comment.push({ id: commentId, content });
  commentsByPostId[req.params.id] = comment;

  await axios.post("http://localhost:4005/events", {
    type: "commentCreated",
    data: {
      id: commentId,
      content,
      postId: req.params.id,
    },
  });
  res.status(201).send(comment);
});
app.post("/events", (req, res) => {
  console.log("Event received", req.body.type);
  res.send({});
});

app.listen(4001, () => {
  console.log("app is listening on 4001/ COMMENT");
});
