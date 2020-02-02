import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Frederico"
        timeAgo="Today at 5:45PM"
        blurb="Very interesting take on it!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Helen"
        timeAgo="Today at 10:23AM"
        blurb="Not really a conspiracy theorist."
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Derek"
        timeAgo="Yesterday at 11:05PM"
        blurb="Meh"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
