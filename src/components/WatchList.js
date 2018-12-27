import React, { Component } from "react";
import "./WatchList.css";
import WatchMovie from "./WatchMovie.js";
import MovieBox from "./MovieBox.js";
import $ from "jquery";

class WatchList extends Component {
  state = { watchList: [] };
  constructor(props) {
    super(props);
    this.displayWatchlist = this.displayWatchlist.bind(this);
  }
  componentDidMount() {
    this.displayWatchlist();
  }
  //display the movies that are in watchlist
  displayWatchlist() {
    console.log("in display watchlist");
    var movieBoxes = [];
    var watchlist = [];
    var savedWatchlist = [];
    savedWatchlist = JSON.parse(localStorage.getItem("watchlist"));
    if (savedWatchlist) {
      watchlist = savedWatchlist;
      console.log("saved watchlist: " + savedWatchlist);
    }
    Array.prototype.forEach.call(watchlist, movie => {
      const movieBox = (
        <WatchMovie
          displayWatchlist={this.displayWatchlist}
          key={movie.id}
          movie={movie}
        />
      );
      movieBoxes.push(movieBox);
    });
    this.setState({ rows: movieBoxes });
  }
  //search movies by input keyword
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
  searchChangeHandler(event) {
    const searchTerm = event.target.value;
    if (searchTerm.trim() === "") {
      this.displayWatchlist();
    } else {
      this.performSearch(searchTerm);
    }
  }
  render() {
    return (
      <div id="watch-app" className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <h6>Watch List</h6>
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
        <div
          style={{
            position: "relative",
            maxWidth:"100%",
            height: "560px",
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
