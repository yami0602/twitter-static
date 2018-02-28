import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Time() {
  return <span className="time">3 hrs ago</span>;
}

function Message() {
  return <div className="message">This is a message</div>;
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="handle">@handle A Name</span>
      <span className="name" />
    </span>
  );
}

function Avatar() {
  return (
    <img
      src="https://cdn4.iconfinder.com/data/icons/superheroes/512/batman-512.png"
      className="avatar"
      alt="avatar"
      width="50px"
      height="50px"
    />
  );
}

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;

const LikeButton = () => <i className="fa fa-heart heart-button" />;

const MoreOptionButton = () => (
  <i className="fa fa-ellipsis-h MoreOption-button" />
);

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle />
        <Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionButton />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Tweet />, document.getElementById("root"));
