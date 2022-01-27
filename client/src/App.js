import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios"

function App() {

  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");

  //Display a list with the movie names and reviews
  //create a state called movieReviewList (an array)
  const [movieReviewList, setMovieList] = useState([]);
  
  //Display all movie reviews after the form
  useEffect(()=> {
    //make an axios request
    //the response variable will contain the JSON from back end
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      //console.log(response.data);
      //set the movieList to store the data gotten from backend (the response)
      setMovieList(response.data);
    });
  }, []);

  //Function to be called whenever the submit button is pressed
  const submitReview = () => {
    //post request on axios sending info on the form to the backend
    //localhost:3001 is the API
    //The '/' route is not going to be used for making the post requests
    //A separate route is being made in the server for the API 
    //We're sending an object with a movieName and a movieReview to the backend (server)
    //Body-parser middleware changes everything to JSON format
    Axios.post("http://localhost:3001/api/insert", {
      //parse 2 variables as an object from frontend
      movieName: movieName, 
      movieReview: review,
    });

      setMovieList([
        ...movieReviewList,
        { movieName: movieName, movieReview: review },
    });
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

        {movieReviewList.map((val)=>{
          return <h1>
            MovieName: {val.movieName} | MovieReview: {val.movieReview}
            </h1>
        })}
      </div>
    </div>
  );
}

export default App;
