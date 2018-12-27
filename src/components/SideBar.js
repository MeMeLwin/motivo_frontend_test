import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NaviLink from "./NaviLink";
import App from "../App";
import WatchList from "./WatchList";
import "./SideBar.css";
class SideBar extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="main">
          <div className="sidenav">
            <NaviLink style={{ position: "fix" }} />
          </div>

            <Switch>
              <Route path="/" component={App} exact="true" />
              <Route path="/watchlist" component={WatchList} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default SideBar;
