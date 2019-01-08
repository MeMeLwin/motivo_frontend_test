import React, { Component } from "react";
import "./App.css";
import "./FontStyle.css";
import { FaSistrix } from "react-icons/fa";
import MovieBox from "./components/MovieBox.js";
import $ from "jquery";
import { Button } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { rows: [], watchList: [] };
    this.pageCnt = 1;
  }

  componentDidMount() {
    this.filterMovie("popular");
  }
  // filter movies by popular, upcoming, now playing, top rated
  filterMovie(searchTerm) {
    var movieBoxes = [];
    this.setState({ rows: [] });
    for (let i = 1; i <= this.pageCnt; i++) {
      movieBoxes = [];
      const urlString =
        "https://api.themoviedb.org/3/movie/" +
        searchTerm +
        "?api_key=9b2369d7210e25238f707ddca60ddd85&language=en-US&page=" +
        i;

      $.ajax({
        url: urlString,
        //eslint-disable-next-line
        success: searchResults => {
          const results = searchResults.results;
          results.forEach(movie => {
            movie.poster =
              "https://image.tmdb.org/t/p/w185" + movie.poster_path;
            var date = movie.release_date.split("-");
            movie.release_date = date[0];
            const movieBox = <MovieBox key={movie.id} movie={movie} />;
            movieBoxes.push(movieBox);
          });
          if (i === this.pageCnt) {
            this.setState({ rows: movieBoxes });
          }
        },
        error: (xhr, status, err) => {
          console.error("Failed to fetch data");
        }
      });
    }
  }
  // search movies by input keyword
  performSearch(searchTerm) {
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=9b2369d7210e25238f707ddca60ddd85&query=" +
      searchTerm;

    $.ajax({
      url: urlString,
      success: searchResults => {
        const results = searchResults.results;
        var movieBoxes = [];
        results.forEach(movie => {
          movie.poster = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          var date = movie.release_date.split("-");
          movie.release_date = date[0];
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
      this.filterMovie("popular");
    } else {
      this.performSearch(searchTerm);
    }
  }


  buttonHandler(event) {

    var yourBtn = this.state.buttonStatus;
    var btnStyle = {
		backgroundColor: 'gray'
	}

  if (yourBtn == 'clicked') {
		btnStyle = {
			backgroundColor: '#00cca3'
		}
	}

    this.setState({
      bgColor: "#00cca3"
    });
    const searchTerm = event.target.id;
    this.filterMovie(searchTerm);
  }
  
  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <h6>All Movies</h6>
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

        <div className="button-div">
          <Button
            className="ui inverted teal button"
            id="popular"
            onClick={this.buttonHandler.bind(this)}
            style={{backgroundColor:this.state.bgColor}}
          >
            POPULAR
          </Button>{" "}
          <Button
            className="btn"
            id="top_rated"
            onClick={this.buttonHandler.bind(this)}
          >
            TOP RATED
          </Button>{" "}
          <Button
            className="btn"
            id="upcoming"
            onClick={this.buttonHandler.bind(this)}
          >
            UPCOMING
          </Button>{" "}
          <Button
            className="btn"
            id="now_playing"
            onClick={this.buttonHandler.bind(this)}
          >
            NOW PLAYING
          </Button>{" "}
        </div>

        <div
          className="movierow"
          style={{
            position: "relative",
            maxHeight: "100%",
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
