import React, { Component } from "react";
import axios from "axios";
import "./Favorites.css";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default: 'You have no favorites yet...',
      favoriteBooks: [],
      showFavorites: true,
      showSearch: false
    };
    this.deleteBook = this.deleteBook.bind(this);  
  }

  //runs as soon as we move to the favorites page. Makes a request to the internal API and sets state to the result
  componentDidMount(req, res, next) {
    axios
      .get("/api/displayFavorites/")
      .then(result => {          
             result = result.data;
             this.setState({
              favoriteBooks: result
            });
        })
      .catch(err => {
        console.log(err);
      });
  }

  //deletes books from favorites on click of the delete button
  deleteBook(item, index) {
    console.log(index);

    axios({
      method: "DELETE",
      url: `/api/deleteBook/${index}`,
      headers: { "Content-Type": "application/json" }
    })
      .then(result => {
        this.setState({
          favoriteBooks: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    //maps over the array on state and displays each book as a list it em
    let displayFavList = this.state.favoriteBooks.map((curr, index) => {
      return (
        <li className="fav-item" key={index}>
          {curr.title} =>> {curr.author[0].name}
          <button
            className="delete-button"
            onClick={() => this.deleteBook(curr, index)}
          >
            -
          </button>
        </li>
      );
    });

    return <div className="container">           
        <div className="favorites-container">{this.state.favoriteBooks.length === 0 ? this.state.default:displayFavList}</div>
      </div>;
  }
}

export default Favorites;