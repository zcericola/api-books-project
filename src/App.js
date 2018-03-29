import React, { Component } from 'react';
import './App.css';
import Search from "./components/Search/Search";
import Favorites from "./components/Favorites/Favorites";
import Alert from "./components/Alert/Alert";
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
      showSearch: true,
      showFavorites: false,
      defaultTitle: 'BookSpy',
      userTitle: ''
    };
    this.favPage = this.favPage.bind(this);
    this.searchPage = this.searchPage.bind(this);
    this.editTitle = this.editTitle.bind(this);
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

  //updates the backend with a put request and then updates the H1 tag with the result of the updated backend variable.
  editTitle() {
    document.querySelector('.edit-title-input').value = '';       
    axios.put("/api/editTitle/", {"title": this.state.userTitle})
      .then(result => {        
        this.setState({
          defaultTitle: result.data
        })
      
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="app">
        <div className="favorites-top-div">
          <button className="home-btn" onClick={this.searchPage}>
            Go Home
          </button>
          <button className="fav-page-btn" onClick={this.favPage}>
            Favorites
          </button>
        </div>
        <div className="main-header">
          <h1 id="changeable" className="app-title">
            {this.state.defaultTitle}
          </h1>
          <input className = 'edit-title-input' placeholder = 'edit application title here..' onChange = {(e) => {this.setState({userTitle: e.target.value})}}/>
          <button className = 'edit-title-btn' onClick = {this.editTitle}>Change Title</button>
        </div>
        {this.state.showSearch && <Search />}
        {this.state.showFavorites && <Favorites />}
        <Alert />
      </div>
    );
  }
}

export default App;
