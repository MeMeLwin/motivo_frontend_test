import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class NaviLink extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavLink to="/">
          <label style={{ paddingLeft: 3, fontSize: 17 }}>&#x2630;</label>
        </NavLink>
        <NavLink to="/watchlist">
          <label style={{ paddingTop: 5, fontSize: 22 }}>&#9733;</label>
        </NavLink>
      </div>
    );
  }
}

export default NaviLink;
