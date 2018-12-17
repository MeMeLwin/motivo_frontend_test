import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MenuBar extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="https://google.com/">All Movies</Link>

          <form onSubmit={this.props.getMovieList}>
            <button>POPULAR</button>
            <button>TOP RATED</button>
            <button>UPCOMING</button>
            <button>NOW PLAYING</button>
          </form>
        </div>
      </Router>
    );
  }
}

export default MenuBar;
