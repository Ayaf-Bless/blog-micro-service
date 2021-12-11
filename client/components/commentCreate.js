import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4001/posts/" + postId + "/comments", {
      content,
    });
    setContent("");
  };
  return (
    <div onSubmit={handleSubmit}>
      <form>
        <div className={"form-group"}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="comment"
            className={"form-control"}
            autoComplete={"off"}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className={"btn btn-primary"}>Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
