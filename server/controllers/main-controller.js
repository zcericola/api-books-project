const axios = require('axios');
const parseString = require('xml2js').parseString;
//pulling in the api Key from key.js
const { apiKey } = require("./../key");

// let baseUrl =
//   "https://www.goodreads.com/search/index.xml?key=zJXHFyNNPZPwfKiB4KxWlw&q=";

let baseUrl = "https://www.goodreads.com/search/index.xml?key=";

//getSearchResults function that calls the external API
let getSearchResults = (req,res,next) => {
    axios.get(`${ baseUrl }${ apiKey }&q=${ req.body.searchTerm }`).then( result => {
        parseString(result.data, function(err, result) {
            return res.json(result.GoodreadsResponse.search[0].results[0].work);
        })       
        
      
    }).catch( (err) => {console.log(err)});
}

//exporting the getSearchResults function so that the server will be able to use it.
module.exports = {
    getSearchResults: getSearchResults
}

