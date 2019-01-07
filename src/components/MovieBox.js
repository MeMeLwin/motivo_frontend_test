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

class MovieBox extends Component {
  state = {
    watchlist: [],
    items: [],
    show: false,
    showTrailer: false,
    crew: [],
    cast: [],
    relatedMovies: [],
    relatedMovieTitle: "",
    backgroundsTitle: "",
    backdrops: [],
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

  handleAdd(event) {
    const id = event.target.id;
    this.addToWatchList(id);
  }
  // add the movie to watchlist
  addToWatchList(id) {
    var watchMovies;
    watchMovies = {
      id: id,
      title: this.props.movie.title,
      release_date: this.props.movie.release_date,
      poster: this.props.movie.poster,
      vote_average: this.props.movie.vote_average
    };
    var savedWatchlist = [];
    if (localStorage.getItem("my_watchlist") !== null) {
      savedWatchlist = Array.from(
        JSON.parse(localStorage.getItem("my_watchlist"))
      );
    }
    if (savedWatchlist) {
      savedWatchlist.push(watchMovies);
      savedWatchlist = this.getUnique(savedWatchlist, "id");
      localStorage.setItem("my_watchlist", JSON.stringify(savedWatchlist));
      this.setState({
        watchlist: savedWatchlist
      });
    } else {
      this.setState({
        watchlist: watchMovies
      });
      savedWatchlist.push(watchMovies);
      localStorage.setItem("my_watchlist", JSON.stringify(savedWatchlist));
    }
  }
  // prevent watchlist from duplicating items
  getUnique(arr, comp) {
    const unique = arr
      .map(e => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])
      .map(e => arr[e]);

    return unique;
  }
  //get the detail info of the movie
  movieDetail() {
    const urlString =
      "https://api.themoviedb.org/3/movie/" +
      this.props.movie.id +
      "?api_key=9b2369d7210e25238f707ddca60ddd85&append_to_response=credits";

    $.ajax({
      url: urlString,
      success: searchResults => {
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
  relatedMovie() {
    const urlString =
      "https://api.themoviedb.org/3/movie/" +
      this.props.movie.id +
      "/similar?api_key=4ccda7a34189fcea2fc752a6ee339500&language=en-US";

    $.ajax({
      url: urlString,
      success: searchResults => {
        var related = searchResults.results;
        var relatedMovies = related;
        if (relatedMovies.length > 3) {
          relatedMovies = relatedMovies.slice(0, 3);
        }
        if (relatedMovies.length > 0) {
          this.setState({ relatedMovieTitle: "Related Movies" });
        }
        relatedMovies.forEach(relatedMovie => {
          relatedMovie.poster_path =
            "https://image.tmdb.org/t/p/w185" + relatedMovie.poster_path;
        });
        this.setState({ relatedMovies: relatedMovies });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
  }
  getBackgrounds() {
    const urlString =
      "https://api.themoviedb.org/3/movie/" +
      this.props.movie.id +
      "/images?api_key=4ccda7a34189fcea2fc752a6ee339500&language=ru-RU&include_image_language=ru,null";

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
  movieTrailer() {
    const urlString =
      "https://api.themoviedb.org/3/movie/" +
      this.props.movie.id +
      "/videos?api_key=4ccda7a34189fcea2fc752a6ee339500&language=en-US";

    $.ajax({
      url: urlString,
      success: searchResults => {
        var movieTrailer = searchResults.results;
        var trailer = movieTrailer;
        if (trailer.length > 0) {
          trailer[0].key =
            "https://www.youtube.com/embed/" + movieTrailer[0].key;
          this.setState({ trailer: trailer });
        }
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
  }

  showModal = () => {
    this.movieDetail();
    this.movieTrailer();
    this.relatedMovie();
    this.getBackgrounds();
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  showModalTrailer = () => {
    this.setState({ showTrailer: true });
  };

  hideModalTrailer = () => {
    this.setState({ showTrailer: false });
  };
  render() {
    return (
      <div
        key={this.props.movie.id}
        style={{
          width: 230,
          height: 420,
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
                <button className="icon-btn">
                  <FaBookmark />
                </button>
                <span>Bookmark </span>
                <button
                  className="icon-btn"
                  id={this.props.movie.id}
                  onClick={this.handleAdd.bind(this)}
                >
                  <FaStar />
                </button>{" "}
                add to watchList
              </div>

              <div className="related-div">
                <div className="modal-header" style={{ paddingLeft: 20 }}>
                  <strong>{this.state.relatedMovieTitle}</strong>
                  <br />
                </div>
                {this.state.relatedMovies.map(function(movie, index) {
                  return (
                    <div className="related-movie" key={index}>
                      <img alt="poster" src={movie.poster_path} />
                      <br />
                      {movie.title}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="modal-div2">
              <h2>
                <strong>
                  <span className="green-text">{this.props.movie.title}</span>
                </strong>
              </h2>
              <div>
                <div className="detail-top">
                  <div className={this.state.detail[0].percent_class}>
                    <span style={{ color: "#fff" }}>
                      <strong>{this.state.detail[0].percent}</strong>
                      <sup style={{ fontSize: 12 }}>&#37;</sup>
                    </span>
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                  <div className="links">
                    <button
                      className="trailer-btn"
                      onClick={this.showModalTrailer}
                    >
                      <span className="green-text">
                        <span style={{ fontSize: 32 }}>
                          <FaPlayCircle />
                        </span>
                        <br />
                        PlayTrailer
                      </span>
                    </button>
                  </div>
                  <div className="info-div">
                    Genres:{" "}
                    <span className="green-text">
                      {this.state.detail[0].genres.map(g => g.name).join(", ")}
                    </span>
                    <br />
                    Release Year:{" "}
                    <span className="green-text">
                      {this.state.detail[0].release_date}
                    </span>
                    <br />
                    Duration:{" "}
                    <span className="green-text">
                      {this.state.detail[0].runtime}
                    </span>
                  </div>
                </div>
              </div>

              <hr />
              <div>
                <div className="modal-header" style={{ paddingBottom: 0 }}>
                  <strong>Overview</strong>
                </div>
                <p className="overview">{this.state.detail[0].overview}</p>
              </div>
              <div className="crew-div">
                <div className="modal-header">
                  <strong>Feature Crew</strong>
                  <br />
                </div>

                {this.state.crew.map(function(crew, index) {
                  return (
                    <div key={index} className="crew">
                      {crew.job} :{" "}
                      <span className="green-text">{crew.name}</span>
                    </div>
                  );
                })}
              </div>
              <hr />
              <div className="modal-header">
                <strong>Top Billed Cast</strong>
                <br />
              </div>
              <div className="cast-div">
                {this.state.cast.map(function(cast, index) {
                  return (
                    <div className="cast" key={index}>
                      <img alt="profile" src={cast.profile_path} />
                      <br />
                      {cast.name}
                      <br />
                      <span className="green-text">{cast.character}</span>
                    </div>
                  );
                })}
              </div>
              <br />
              <hr />
              <div className="modal-header">
                <strong>{this.state.backgroundsTitle}</strong>
                <br />
              </div>
              {this.state.backdrops.map(function(backdrop, index) {
                return (
                  <div className="backdrops" key={index}>
                    <img alt="backgrounds" src={backdrop.file_path} />
                  </div>
                );
              })}
            </div>

            <TrailerModal
              show={this.state.showTrailer}
              handleCloseTrailer={this.hideModalTrailer}
            >
              <iframe
                title={this.state.trailer[0].key}
                src={this.state.trailer[0].key}
                width="500"
                height="400"
                frameBorder="0"
                allowFullScreen="allowFullScreen"
              />
            </TrailerModal>
          </Modal>
          <div className="poster-container" onClick={this.showModal}>
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
          </div>
          <br />
          <center>
            <div className="title">
              <strong> {this.props.movie.title}</strong>
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
              <span id="g">Fantasy </span>
              <span
                style={{
                  color: "#fff",
                  textAlign: "left",
                  letterSpacing: "0.2mm"
                }}
              >
                Year:
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
          </center>

          <br />
        </main>
      </div>
    );
  }
}

//Basic Modal Box
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <button className="back-btn" onClick={handleClose}>
          <FaChevronCircleLeft />
          Back
        </button>
        {children}
      </div>
    </div>
  );
};

//Trailer Modal Box
const TrailerModal = ({ handleCloseTrailer, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div className="trailermodal-main">
        <button onClick={handleCloseTrailer} style={{ background: "red" }}>
          <FaTimes />
        </button>
        <br />
        {children}
      </div>
    </div>
  );
};

export default MovieBox;