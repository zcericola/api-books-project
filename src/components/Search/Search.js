//does internal API calls which will then trigger our backend to do the external API call
import React, { Component } from 'react';
import axios from 'axios';
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
    this.addBook = this.addBook.bind(this);
  }

  //To add books to favorite books
  //sending the relevant info to the main controller
  addBook(item){
    this.setState({favoriteBooks: item});  
    axios.post("/api/addBook", {favBook: item.best_book[0]});
  }
 

  getResults() {
    //calls to our internal API and sends whatever the search term is from the input
    axios
      .post("/api/getSearchResults", { searchTerm: this.state.searchTerm })
      .then(result => {        
        result = result.data;         
          
        this.setState({
          searchResults: result        
        });
        
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
       
        let searchResults = this.state.searchResults.map((curr, index, array) => {
      return <li className="results-item" key={index}>
          {curr.best_book[0].title} =>> {curr.best_book[0].author[0].name}
          <button className="fav-button" onClick={() => this.addBook(curr)}>
            +
          </button>
        </li>;
    });     

    return(
     <div>
        <input id="search-bar" onChange={e => {
            this.setState({ searchTerm: e.target.value });
          }} />
        <button className="submit" onClick={this.getResults}>
          Search
        </button>
        <div className="results">
          <div className="results-container">{searchResults}</div>
         
          
        </div>
      </div>)
  }
}

export default Search;