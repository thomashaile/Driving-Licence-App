import React from "react";
import Comment from "./Comment";

export default function CommentList(props) {
  return (
    <div className="commentList">
      <h5 className="text-muted mb-4">
        <span className="badge badge-info">{props.comments.length}</span>{" "}
        Comment{props.comments.length > 0 ? "s" : ""}
      </h5>

      {props.comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}
