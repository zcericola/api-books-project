const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//require my controller file
const { getSearchResults } = require("./controllers/main-controller");



//initialize express
const app = express();

//use middleware
app.use(bodyParser.json());
app.use(cors());



//port to run my internal server, separate from React's server
const portNum = 3002;

//sending the external API data from the controller to my front-end for use with my components
app.post("/api/getSearchResults",getSearchResults);



//making sure that express is listening to port 3002
app.listen(portNum, () => {
    console.log(`Listening on port ${portNum}`);
})





