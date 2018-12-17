import React from "react";
import SideBar from "./components/SideBar";
import MenuBar from "./components/MenuBar";
import MainPage from "./components/MainPage";

const API_KEY = "9b2369d7210e25238f707ddca60ddd85";

class App extends React.Component {
  state = {};

  getMovieList = async e => {
    e.preventDefault();
    const api_call = await fetch(
      "https://api.themoviedb.org/3/list/1?api_key=9b2369d7210e25238f707ddca60ddd85&language=en-US"
    );
    const data = await api_call.json();
    console.log(data);
  };
  render() {
    return (
      <div>
        <MenuBar getMovieList={this.getMovieList} />
        <MainPage />
      </div>
    );
  }
}

export default App;
