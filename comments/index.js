const express = require("express");
const { randomBytes } = require("crypto");

const app = express();
app.use(express.json());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  const comment = commentsByPostId[req.params.id];
  if (!comment) {
    return res.send({ message: "comment no found" });
  }
  res.send(comment);
});
app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comment = commentsByPostId[req.params.id] || [];
  comment.push({ id: commentId, content });
  commentsByPostId[req.params.id] = comment;
  res.status(201).send(comment);
});

app.listen(4001, () => {
  console.log("app is listening on 4001");
});
