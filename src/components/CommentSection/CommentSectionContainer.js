// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const {comments} = props;
const [userComment, setUserComment] = useState('')
  return (
    <div>
      { comments.map(randomComment => {
        // console.log(randomComment)
        return <Comment key = {randomComment.text} comment = {randomComment} /> 
      }) }
      {/* map through the comments data and return the Comment component */}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
