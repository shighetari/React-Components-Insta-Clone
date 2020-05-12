// You do not need to do anything in this file. Look at the CommentSection file. 

import React from 'react';
import './Comment.css';

const Comment = props => {
  const {comment} = props
  return (
    <div className="comment-text">
      <span className="user">{comment.username}</span>
      {' '}
      <span className="comment">{comment.text}</span>
    </div>
  );
};


export default Comment;
