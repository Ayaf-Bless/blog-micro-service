const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});
app.post("/events", (req, res) => {
  const { type, data } = req.body;
  if (type === "postCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
    console.log(posts);
  }
  if (type === "commentCreated") {
    const { id, content, postId, status } = data;
    console.log(posts[postId], postId);
    const post = posts[postId];
    post.comments.push({ id, content, status });
  }
  if (type === "commentUpdated") {
    const { id, postId, content, status } = data;
    const post = posts[postId];
    const comment = post.comments.find((comment) => comment.id === id);
    comment.status = status;
    comment.content = content;
  }
  res.send({});
});

app.listen(4002, () => {
  console.log("app is listening on 4002/ Query");
});
