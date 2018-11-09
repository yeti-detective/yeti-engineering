import React from "react";

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      likesCount: 0
    };
    this.upLike = this.upLike.bind(this);
    this.onLike = this.onLike.bind(this);
  }

  componentWillMount() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "./click");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        this.setState({
          likesCount: xhr.responseText
        });
      }
    };
    xhr.send();
  }

  upLike(like) {
    this.setState({
      likeCount: like
    });
  }

  onLike() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "./click");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({
          likesCount: xhr.responseText
        });
      }
    };
    xhr.send();
  }

  render() {
    return (
      <div onClick={this.onLike}>
        <img
          className="beard"
          alt="photo of a handsome man"
          src="/images/FancySmartboy.jpg"
        />
        <br />
        Likes : <span id="likes">{this.state.likesCount}</span>
        <div>
          <button
            className="beard-button"
            title="likes stored on mongodb instance"
          >
            <i className="fas fa-thumbs-up" />
          </button>
        </div>
        <h3>Like My Beard!</h3>
        <br />
      </div>
    );
  }
}

export default LikeButton;
