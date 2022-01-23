import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios'

function App() {

  const [movieName, setMovieName] = useState("")
  const [review, setReview] = useState("")
  
  //Function to be called whenever the submit button is pressed
  const submitReview = () => {
    //post request on axios sending info on the form to the backend
    //localhost:3001 is the API
    //The '/' route is not going to be used for making the post requests
    //A separate route is being made in the server for the API 
    Axios.post('http://localhost:3001/')
  };

  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>

      <div className='form'>
        <label>Movie Name:</label>
        <input type="text" name="movieName" onChange={(e) => {
          setMovieName(e.target.value)
        }}/>
        <label>Review:</label>
        <input type="text" name="review" onChange={(e) => {
          setReview(e.target.value)
        }}/>
        
        <button onClick={submitReview}>Submit</button>
      </div>
    </div>
  );
}

export default App;
