import React from "react";
import CommentCreate from "./commentCreate";
import CommentList from "./commentList";

const PostList = ({ data }) => {
  const renderPosts = Object.values(data).map((post) => {
    return (w
      <div
        className={"card"}
        style={{ width: "30%", marginBottom: "20%" }}
        key={post.id}
      >
        <div className={"card-body"}>
          <h3>{post.title}</h3>
          <CommentList postId={post.id} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });
  return (
    <div className={"d-flex flex-row flex-wrap justify-content-between"}>
      {renderPosts}
    </div>
  );
};

export default PostList;
