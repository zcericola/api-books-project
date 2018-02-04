//does internal API calls which will then trigger our backend to do the external API call
import React, { Component } from 'react';
import axios from 'axios';
import Favorites from '../Favorites/Favorites';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",     
      searchResults: [],
      favoriteBooks: []     
    };

    this.getResults = this.getResults.bind(this);
    this.add = this.add.bind(this);
  }

  //To add books to favorite books
  add(event){
    this.setState({favoriteBooks: event.target.value});
    console.log(this.state.favoriteBooks);
  }
 

  getResults() {
    //calls to our internal API and sends whatever the search term is from the input
    axios
      .post("/api/getSearchResults", { searchTerm: this.state.searchTerm })
      .then(result => {        
        result = result.data;
        console.log(result);      

        let searchResults = result.map(function(curr, index, array) {
          return <li className="results-item" key={index} >
              {curr.best_book[0].title} =>> {curr.best_book[0].author[0].name}
              <button className="fav-button" key = {index}>+</button>
            </li>;
        });        

        this.setState({
          searchResults: searchResults        
        });
        
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    // <Favorites searchResults = {this.state.searchResults} />

    return <div>
        <input id="search-bar" onChange={e => {
            this.setState({ searchTerm: e.target.value });
          }} />
        <button id="search-submit" onClick={this.getResults}>
          Search
        </button>
        <div className="results">
          <div className="results-container">{this.state.searchResults}</div>
         
          
        </div>
      </div>;
  }
}

export default Search;