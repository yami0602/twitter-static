import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import avatar from "./batman-512.png";

function TwitterTweet() {
  return (
    <div className="container">
      <div className="avatar" />
      <img src={avatar} width="150px" height="150px" />

      <div className="info">
        <div className="handle">
          <div className="handle-name">@dusani</div>
          <div className="elasped-time">. 3hrs Ago</div>
        </div>
        <div className="message">
          Etiam porta sem malesuada magna mollis euismod.
        </div>
        <div className="symbols">Testing</div>
      </div>
    </div>
  );
}

ReactDOM.render(<TwitterTweet />, document.getElementById("root"));
