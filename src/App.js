import React, { Component } from "react";
import "./App.css";
import $ from "jquery";
import MovieBox from "./components/MovieBox.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.displayPopularMovies();
    this.displayTopRatedMovies();
    this.displayUpcomingMovies();
    this.displayNowPlayingMovies();
    this.displayAll();
  }
  //Show All Movies using api key from TMDb
  displayAll() {
    const urlString =
      "https://api.themoviedb.org/3/movie/popular?api_key=9b2369d7210e25238f707ddca60ddd85&language=en-US&page=3";

    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("fetch data success");
        const results = searchResults.results;
        var movieBoxes = [];
        results.forEach(movie => {
          movie.poster = "https://image.tmdb.org/t/p/w185" + movie.poster_path;

          const movieBox = <MovieBox key={movie.id} movie={movie} />;
          movieBoxes.push(movieBox);
        });
        this.setState({ rows: movieBoxes });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
  }

  //Show Popular Movies using api key from TMDb
  displayPopularMovies() {
    const urlString =
      "https://api.themoviedb.org/3/movie/popular?api_key=9b2369d7210e25238f707ddca60ddd85&language=en-US&page=1";

    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("fetch data success");
        const results = searchResults.results;
        var movieBoxes = [];
        results.forEach(movie => {
          movie.poster = "https://image.tmdb.org/t/p/w185" + movie.poster_path;

          const movieBox = <MovieBox key={movie.id} movie={movie} />;
          movieBoxes.push(movieBox);
        });
        this.setState({ rows: movieBoxes });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
  }

  //Show Top Rated Movies using api key from TMDb
  displayTopRatedMovies() {
    const urlString =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=9b2369d7210e25238f707ddca60ddd85";

    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("fetch data success");
        const results = searchResults.results;
        var movieBoxes = [];
        results.forEach(movie => {
          movie.poster = "https://image.tmdb.org/t/p/w185" + movie.poster_path;

          const movieBox = <MovieBox key={movie.id} movie={movie} />;
          movieBoxes.push(movieBox);
        });
        this.setState({ rows: movieBoxes });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
  }

  //Show Upcoming Movies using api key from TMDb
  displayUpcomingMovies() {
    const urlString =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=9b2369d7210e25238f707ddca60ddd85&language=en-US&page=2";

    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("fetch data success");
        const results = searchResults.results;
        var movieBoxes = [];
        results.forEach(movie => {
          movie.poster = "https://image.tmdb.org/t/p/w185" + movie.poster_path;

          const movieBox = <MovieBox key={movie.id} movie={movie} />;
          movieBoxes.push(movieBox);
        });
        this.setState({ rows: movieBoxes });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
  }

  //Show Now Playing Movies using api key from TMDb
  displayNowPlayingMovies() {
    const urlString =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=9b2369d7210e25238f707ddca60ddd85&language=en-US&page=1";

    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("fetch data success");
        const results = searchResults.results;
        var movieBoxes = [];
        results.forEach(movie => {
          movie.poster = "https://image.tmdb.org/t/p/w185" + movie.poster_path;

          const movieBox = <MovieBox key={movie.id} movie={movie} />;
          movieBoxes.push(movieBox);
        });
        this.setState({ rows: movieBoxes });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
  }

  //Search Movies
  performSearch(searchTerm) {
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=9b2369d7210e25238f707ddca60ddd85&query=" +
      searchTerm;

    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("fetch data success");
        const results = searchResults.results;
        var movieBoxes = [];
        results.forEach(movie => {
          movie.poster = "https://image.tmdb.org/t/p/w185" + movie.poster_path;

          const movieBox = <MovieBox key={movie.id} movie={movie} />;
          movieBoxes.push(movieBox);
        });
        this.setState({ rows: movieBoxes });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
  }

  //Handler for performSearch
  searchChangeHandler(event) {
    const searchTerm = event.target.value;
    if (searchTerm.trim() === "") {
      this.displayAll();
    } else {
      this.performSearch(searchTerm);
    }
  }

  render() {
    let lgClose = () => this.setState({ lgShow: false });
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <a
                  className="link"
                  href="#"
                  onClick={this.displayAll.bind(this)}
                >
                  All Movies
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <input
          className="searchBox"
          style={{
            fontSize: 14,
            display: "block",
            width: "98%",
            paddingTop: 8,
            paddingBottom: 8,
            color: "white"
          }}
          onChange={this.searchChangeHandler.bind(this)}
          placeholder="Search..."
        />
        <br />

        <div className="button-div">
          <Button
            className="btn"
            onClick={this.displayPopularMovies.bind(this)}
          >
            POPULAR
          </Button>{" "}
          <Button
            className="btn"
            onClick={this.displayTopRatedMovies.bind(this)}
          >
            TOP RATED
          </Button>{" "}
          <Button
            className="btn"
            onClick={this.displayUpcomingMovies.bind(this)}
          >
            UPCOMING
          </Button>{" "}
          <Button
            className="btn"
            onClick={this.displayNowPlayingMovies.bind(this)}
          >
            NOW PLAYING
          </Button>{" "}
        </div>
        <div
          style={{
            position: "relative",
            maxHeight: "550px",
            overflowY: "scroll",
            overflowX: "hidden"
          }}
        >
          {this.state.rows}
        </div>
      </div>
    );
  }
}

export default App;
