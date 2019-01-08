import React, { Component } from "react";
import "./MovieBox.css";
import "./modal.css";
import $ from "jquery";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

class WatchMovie extends Component {
  state = {
    watchlist: [],
    items: [],
    show: false,
    showTrailer: false,
    crew: [],
    cast: [],
    relatedMovies: [],
    backdrops: [],
    relatedMovieTitle: "",
    backgroundsTitle: "",
    trailer: [
      {
        key: "QMtHZGn1Ka4"
      }
    ],
    detail: [
      {
        genres: [{ id: 18, name: "" }],
        percent_class: ""
      }
    ]
  };

  handleRemove(event) {
    var id = this.props.movie.id;
    this.removeMovie(id);
  }
  // remove the movie from watchlist
  removeMovie(id) {
    var savedWatchlist = JSON.parse(localStorage.getItem("mywatchlist"));
    savedWatchlist = savedWatchlist.filter(function(e) {
      return e.id !== id;
    });
    localStorage.setItem("mywatchlist", JSON.stringify(savedWatchlist));

    this.props.displayWatchlist();
  }

  getBackgrounds() {
    const urlString =
      "https://api.themoviedb.org/3/movie/" +
      this.props.movie.id +
      "/images?api_key=9b2369d7210e25238f707ddca60ddd85&language=ru-RU&include_image_language=ru,null";

    $.ajax({
      url: urlString,
      success: searchResults => {
        var backdrops = searchResults.posters;
        if (backdrops.length > 4) {
          backdrops = backdrops.slice(0, 4);
        }
        if (backdrops.length > 0) {
          this.setState({ backgroundsTitle: "Backgrounds" });
        }
        backdrops.forEach(backdrop => {
          backdrop.file_path =
            "https://image.tmdb.org/t/p/w185" + backdrop.file_path;
        });
        this.setState({ backdrops: backdrops });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
  }

  render() {
    return (
      <div
        key={this.props.movie.id}
        style={{
          width: 230,
          height: 460,
          paddingTop: 25,
          color: "#00cca3",
          float: "left"
        }}
      >
        <div className="poster">
          <div className="movie-poster">
            <img
              id={this.props.movie.id}
              alt="poster"
              src={this.props.movie.poster}
            />
          </div>

          <div className="hoverText">
            <strong>{this.props.movie.title}</strong>
            <p>{this.props.movie.overview}</p>
          </div>
        </div>

        <br />
        <center>
          <div className="title">
            <strong>{this.props.movie.title}</strong>
            <br />
            <span
              id="genre"
              style={{
                color: "#fff",
                textAlign: "left",
                letterSpacing: "0.2mm"
              }}
            >
              Genres:
            </span>
            <span id="g">Science Fiction </span>

            <span
              style={{
                textAlign: "left",
                letterSpacing: "0.2mm",
                color: "#fff"
              }}
            >
              Year :
            </span>
            <span> {this.props.movie.release_date}</span>
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
          <button
            className="btn-remove"
            id={this.props.movie.id}
            onClick={this.handleRemove.bind(this)}
          >
            Remove
          </button>
        </center>

        <br />
      </div>
    );
  }
}

export default WatchMovie;
