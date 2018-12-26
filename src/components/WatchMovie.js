import React, { Component } from "react";
import "./MyWatchList.css";
import { FaBookmark } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
class WatchMovie extends Component {
  state = {};
  handleRemove(event) {
    const id = event.target.id;
    this.removeFromWatchList(id);
  }
  removeFromWatchList(id) {
    console.log("remove from watch list: " + id);
  }
  render() {
    return (
      <div
        key={this.props.movie.id}
        style={{
          width: 200,
          height: 400,
          paddingTop: 5,
          color: "white",
          float: "left"
        }}
      >
        <div className="poster-container">
          <div className="poster">
            <img
              id={this.props.movie.id}
              alt="poster"
              src={this.props.movie.poster}
            />
            <div className="hoverText">
              <strong>{this.props.movie.title}</strong>
              <p>{this.props.movie.overview}</p>
            </div>
          </div>
        </div>
        <br />
        <center>
          <div className="title">
            {this.props.movie.title}
            <br />
            <span id="genre" style={{ textAlign: "right" }}>
              Genres:
            </span>
            <span id="g">Fantasy</span>
            <span id="year" style={{ textAlign: "left" }}>
              Year:
            </span>
            <span id="y">{this.props.movie.release_date}</span>
          </div>
        </center>
        <center>
          <div className="vote">
          <strong>{this.props.movie.vote_average}</strong>
          <span className="icons">
              <FaHeart />
              <FaBookmark />
              <FaStar />
          </span>
          </div>
        </center>
        <button
          className="removeBtn"
          id={this.props.movie.id}
          onClick={this.handleRemove.bind(this)}
        >
          Remove
        </button>
      </div>
    );
  }
}

export default WatchMovie;
