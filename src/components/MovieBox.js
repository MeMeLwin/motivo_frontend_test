import React, { Component } from "react";
import $ from "jquery";
import { FaBookmark } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Button } from "reactstrap";
import "./MovieBox.css";

//Inner Page of Movie
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <button onClick={handleClose}>Close</button>
        <Button bsStyle="link" onClick={handleClose}>
          Back to all movies
        </Button>
        <br />
        {children}
      </div>
    </div>
  );
};

class MovieBox extends Component {
  state = { items: [] };

  constructor(props) {
    super(props);
    var watchMovies = { items: [] };
    //this.state = { items: [] };
  }
  handleAdd(event) {
    const id = event.target.id;
    this.addToWatchList(id);
  }
  addToWatchList(id) {
    console.log("add to watchList : " + id);
    // var watchList = [];
    // if (localStorage.getItem("watchList") !== null) {
    //   watchList = localStorage.getItem("watchList");
    // }
    // watchList.concat(id);
    // localStorage.setItem("watchList", watchList);
    // console.log(localStorage.getItem("watchList").value);
  }

  //Movie Details for Modal Box
  movieDetail() {
    const urlString =
      "https://api.themoviedb.org/3/movie/" +
      this.props.movie.id +
      "?api_key=9b2369d7210e25238f707ddca60ddd85&append_to_response=credits";

    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("Movie data fetch success");
        var detail = searchResults;
        var time = detail.runtime;
        var hour = Math.trunc(time / 60);
        var min = time % 60;
        detail.runtime = hour + "hr " + min + "min";
        var release_date = detail.release_date.split("-");
        detail.release_date = release_date[0];
        detail.percent = detail.vote_average * 10;
        detail.percent_class = "c100 p" + detail.percent + " dark small green";
        var details = [];
        details.push(detail);

        var cast = detail.credits.cast;
        if (cast.length > 5) {
          cast = cast.slice(0, 5);
        }
        var crew = detail.credits.crew;
        if (crew.length > 5) {
          crew = crew.slice(0, 5);
        }
        cast.forEach(cast => {
          cast.profile_path =
            "https://image.tmdb.org/t/p/w185" + cast.profile_path;
        });
        this.setState({ detail: details });
        this.setState({ crew: crew });
        this.setState({ cast: cast });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
  }

  //Movie Trailer for Modal Box
  movieTrailer() {
    const urlString =
      "https://api.themoviedb.org/3/movie/" +
      this.props.movie.id +
      "/videos?api_key=9b2369d7210e25238f707ddca60ddd85&language=en-US";

    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("fetch data success");
        var movieTrailer = searchResults.results;
        var trailer = movieTrailer;
        console.log(trailer[0].key);
        trailer[0].key = "https://www.youtube.com/embed/" + movieTrailer[0].key;
        this.setState({ trailer: trailer });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
  }

  //Modal functions
  showModal = () => {
    this.movieDetail();
    this.movieTrailer();
    this.setState({ show: true });
  };

  hideModal = () => {
    $(".popup").hide();
    $(".links").show();
    this.setState({ show: false });
  };

  render() {
    //let genresList = JSON.stringify(this.props.movie.genres);

    return (
      <div
        key={this.props.movie.id}
        style={{
          width: 200,
          height: 400,
          paddingTop: 25,
          color: "#00cca3",
          float: "left"
        }}
      >
        <main>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <div className="modal-div1">
              <img
                style={{ position: "relative" }}
                alt="poster"
                src={this.props.movie.poster}
              />
              <div className="bookmark-div">
                <span>
                  <FaBookmark />
                  Bookmark
                </span>
                <span>
                  <FaStar />
                  add to watchList
                </span>
                <button
                  id={this.props.movie.id}
                  onClick={this.handleAdd.bind(this)}
                >
                  ADD
                </button>
              </div>

              <div className="related-div">
                <h4>Related Movies</h4>
              </div>
            </div>
            <div className="modal-div2">
              <h2>
                <strong>{this.props.movie.title}</strong>
              </h2>
              <div>
                  
                <div className="wrapper">
                  <div className="popup">
                    <a href="#" class="close">
                      X
                    </a>
                  </div>
                </div>
              </div>
              <br /> <br /> <br />
              <hr />
              <div>
                <h4>
                  <strong>Overview</strong>
                </h4>
              </div>
              <h4>
                <strong>Feature Crew</strong>
              </h4>
              ); })}
              <br />
              <hr />
              <h4>
                <strong>Top Billed Cast</strong>
              </h4>
              ); })}
            </div>
          </Modal>

          <div className="poster-container">
            <div className="poster">
              <img
                id={this.props.movie.id}
                onClick={this.showModal}
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
            <div className="vote">{this.props.movie.vote_average}</div>
          </center>
          <br />
          <br />
        </main>
      </div>
    );
  }
}

export default MovieBox;
