import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Navigation extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavLink to="/" />
        <NavLink to="/watchlist" />
      </div>
    );
  }
}

export default Navigation;
