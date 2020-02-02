import React from "react";
import faker from "faker";

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Frederico
        </a>
        <div className="metadata">
          <span className="date">Today at 5:45PM</span>
        </div>
        <div className="text">Very interesting take on it!</div>
      </div>
    </div>
  );
};

export default CommentDetail;
