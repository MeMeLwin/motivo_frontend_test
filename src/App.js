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
    this.displayAll();
  }
  //Display movies using api key from TMDb
  displayAll() {
    const urlString =
      "https://api.themoviedb.org/3/discover/movie?api_key=9b2369d7210e25238f707ddca60ddd85";

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
  searchChangeHandler(event) {
    const searchTerm = event.target.value;
    if (searchTerm.trim() === "") {
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
                <a className="link" href="">
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
            paddingBottom: 8
          }}
          onChange={this.searchChangeHandler.bind(this)}
          placeholder="Search..."
        />
        <br />

        <div className="button-div">
          <Button className="btn">POPULAR</Button>{" "}
          <Button className="btn">TOP RATED</Button>{" "}
          <Button className="btn">UPCOMING</Button>{" "}
          <Button className="btn">NOW PLAYING</Button>{" "}
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
