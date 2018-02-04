import React, { Component } from 'react';
import './App.css';
import Search from "./components/Search/Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">         
          <h1 className="App-title">Book Database</h1>
          <h3>Search by author or title</h3>
        </header>
        <Search />       
      </div>
    );
  }
}

export default App;
