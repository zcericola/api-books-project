import React, { Component } from 'react';
import './App.css';
import Search from "./components/Search/Search";
import Favorites from "./components/Favorites/Favorites";
import Alert from "./components/Alert/Alert";

class App extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
      showSearch: true,
      showFavorites: false
    };
    this.favPage = this.favPage.bind(this);
     this.searchPage = this.searchPage.bind(this);
  }

  favPage() {
    this.setState({
      showSearch: false,
      showFavorites: true
    });
  }

  searchPage() {
    this.setState({
      showFavorites: false,
      showSearch: true
    });
  }

  render() {
    return <div className="app">
        <div className="favorites-top-div">
          <button className="home-btn" onClick={this.searchPage}>
            Go Home
          </button>
          <button className="fav-page-btn" onClick={this.favPage}>
            Favorites
          </button>
        </div>
        <div className="main-header">
          <h1 className="app-title">Book Database</h1>          
        </div>
        {this.state.showSearch && <Search />}
        {this.state.showFavorites && <Favorites />}
        <Alert />
      </div>;
  }
}

export default App;
