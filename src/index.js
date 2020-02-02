import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
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

      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Joseph
          </a>
          <div className="metadata">
            <span className="date">Today at 5:45PM</span>
          </div>
          <div className="text">Not really a conspiracy theorist.</div>
        </div>
      </div>

      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Shelley
          </a>
          <div className="metadata">
            <span className="date">Today at 5:45PM</span>
          </div>
          <div className="text">Meh!</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
