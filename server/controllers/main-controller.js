const axios = require('axios');
const parseString = require('xml2js').parseString;
//pulling in the api Key from key.js
const { apiKey } = require("./../key");

let favoriteBooks = [];
let userTitle = '';

let baseUrl = "https://www.goodreads.com/search/index.xml?key=";

//getSearchResults function that calls the external API
let getSearchResults = (req,res,next) => {
    axios.get(`${ baseUrl }${ apiKey }&q=${ req.body.searchTerm }`).then( result => {
        parseString(result.data, function(err, result) {
            return res.json(result.GoodreadsResponse.search[0].results[0].work);
        })       
        
      
    }).catch( (err) => {console.log(err)});
}

let addBook = (req,res,next) => {
    favoriteBooks.push(req.body.favBook);
    
}

let displayFavorites = (req, res, next) => {
     res.json(favoriteBooks);
}

let deleteBook = (req, res, next) => {
    favoriteBooks.splice(req.params.index, 1);
    res.json(favoriteBooks);
}

let editTitle = (req, res, next) => {
    console.log(req.body.title);   
    userTitle = (req.body.title);     
    res.json(userTitle);
}


//exporting the getSearchResults function so that the server will be able to use it.
module.exports = {
    getSearchResults: getSearchResults,
    addBook: addBook,
    displayFavorites: displayFavorites,
    deleteBook: deleteBook,
    editTitle: editTitle
}

