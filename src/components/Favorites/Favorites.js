import React, { Component } from "react";
import axios from "axios";
import "./Favorites.css";

class Favorites extends Component {
    constructor(props){
        super(props);
        this.state = {
            favoriteBooks: this.props.searchResults
        }
    }



render (){
    return(
        <div className = 'container'>

        
        </div>
    );
}


}

export default Favorites;