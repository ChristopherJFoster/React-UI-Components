import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.retweetCount = 6;
    this.canRetweet = true;
    this.likes = 4;
  }

  commentsAlert() {
    alert("Comments are disabled at the moment.");
  }

  retweet = () => {
    if (this.canRetweet === true) {
      this.retweetCount += 1;
      this.canRetweet = false;
    } else {
      alert("Hey! You can only retweet once per account.");
    }
  };

  like = () => {
    this.likes += 1;
    if (this.likes === 7) {
      alert("Go ahead...like it as many times as you want.");
    }
    this.render();
  };

  email() {
    alert("Nobody uses email anymore!");
  }

  render() {
    return (
      <div className="icon-container">
        <i className="far fa-comment" onClick={this.commentsAlert} />
        <i className="fas fa-retweet" onClick={this.retweet} />
        <p>{this.retweetCount}</p>
        <i className="far fa-heart" onClick={this.like} />
        <p>{this.likes}</p>
        <i className="far fa-envelope" onClick={this.email} />
      </div>
    );
  }
}

export default Footer;

console.log(Footer);
