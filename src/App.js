import React, { Component } from 'react';
import './App.css';
import Search from "./components/Search/Search";
import Favorites from "./components/Favorites/Favorites";


class App extends Component {
  constructor(){
    super();

    this.state = {
      results: []
    }
  }



  resultsCb = (resultsFromSearch) => {
    this.setState = {
      results: resultsFromSearch
    }

  }

  favPage(){
    {<Favorites />}
  }



  render() {
    return <div className="app">
        <div>          
          <button className="fav-page-btn" onClick={this.favPage}>
            Favorites
          </button>
        </div>
        <h1 className="app-title">Book Database</h1>
        <h3>Search by author or title</h3>

        <Search />
      </div>;
  }
}

export default App;
