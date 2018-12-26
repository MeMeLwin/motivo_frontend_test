import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NaviLink from "./NaviLink";
import App from "../App";
import SideBar from "./SideBar";
import WatchList from "./WatchList";

class MyMain extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="side_bar">
          <SideBar />
        </div>
      </div>
    );
  }
}

export default MyMain;
