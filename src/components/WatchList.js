import React, { Component } from "react";
import "D:/ThalesCode/FrontEndTest/motivo_frontend_test/src/App.css";
import WatchMovie from "./WatchMovie.js";
import $ from "jquery";

class WatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.displayAll();
  }
  displayAll() {
    const urlString =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=9b2369d7210e25238f707ddca60ddd85&language=en-US&page=3";

    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("fetch data success");
        const results = searchResults.results;
        var movieBoxes = [];
        results.forEach(movie => {
          movie.poster = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          // console.log(movie.poster_path);
          const movieBox = <WatchMovie key={movie.id} movie={movie} />;
          movieBoxes.push(movieBox);
        });
        this.setState({ rows: movieBoxes });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
  }
  performSearch(searchTerm) {
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=4ccda7a34189fcea2fc752a6ee339500&query=" +
      searchTerm;

    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("fetch data success");
        const results = searchResults.results;
        var movieBoxes = [];
        results.forEach(movie => {
          movie.poster = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          //console.log(movie.poster_path);
          const movieBox = <WatchMovie key={movie.id} movie={movie} />;
          movieBoxes.push(movieBox);
        });
        this.setState({ rows: movieBoxes });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
  }
  searchChangeHandler(event) {
    //console.log(event.target.value);
    const searchTerm = event.target.value;
    if (searchTerm.trim() === "") {
      //console.log("empty here");
      this.displayAll();
    } else {
      this.performSearch(searchTerm);
    }
  }
  render() {
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
                  My WatchList
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

        <hr />
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

export default WatchList;
