import React, { Component } from "react";
import './Alert.css';



const Alert = () => {


return (
  <div id="alert-container">
    <h3>Greetings!</h3> 
    <h4>This database utilizes the Goodreads API. Please search by author or title.</h4>
    <button className = 'dismiss' onClick = {() => {document.getElementById('alert-container').style.display = 'none'}}>Thank-you</button>
  </div>
);


}


    

  

export default Alert;
