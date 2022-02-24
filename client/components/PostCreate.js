import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://posts.com/posts/create", { title });
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={"form-group"}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="post"
            id="title"
            className={"form-control"}
            value={title}
            onChange={handleChange}
            autoComplete={"off"}
          />
        </div>
        <button className={"btn btn-primary"}>Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
