//does internal API calls which will then trigger our backend to do the external API call
import React, { Component } from 'react';
import axios from 'axios';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      result: [],
      titles: [],
      authors: [],
      rating: []
    };

    this.getResults = this.getResults.bind(this);
  }

  //The method that will call the internal API and then fire the external API function in the controller
  // componentDidMount() {
  //   axios
  //     .post("/api/getSearchResults", { searchTerm: this.state.searchTerm })
  //     .then(result => {
  //       result = result.data;

  //        this.setState({ result: result });

  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  getResults() {
    //calls to our internal API and sends whatever the search term is from the input
    axios
      .post("/api/getSearchResults", { searchTerm: this.state.searchTerm })
      .then(result => {        
        result = result.data;
        console.log(result);

        let bookTitles = result.map(function(curr, index, array) {
          return (
            <li className="title" key={index}>
              {curr.best_book[0].title}
            </li>
          );
        });

        let bookAuthors = result.map(function(curr, index) {
          return (
            <li className="author" key={index}>
              {curr.best_book[0].author[0].name}
            </li>
          );
        });

        this.setState({
          titles: bookTitles,
          authors: bookAuthors
        });
        
      })
      .catch(err => {
        console.log(err);
      });
  }
  getData() {
    axios.get("/api/getImgs").then(result => {
      console.log(result.data);
    });
  }

  render() {
    return <div>
        <input id="search-bar" onChange={e => {
            this.setState({ searchTerm: e.target.value });
          }} />
        <button id="search-submit" onClick={this.getResults}>
          Search
        </button>
        <div className="results">
          <div className="left-container">{this.state.titles}</div>
          <div className="right-container">{this.state.authors}</div>
          
        </div>
      </div>;
  }
}

export default Search;