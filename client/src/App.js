import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  
  //state containing all posts from the API request
  const[listOfPosts, setListOfPosts] = useState([]);


  //axios enables a user to make API requests very easily

  //To make a GET Request
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);
  
  return (
    <div className="App">
      { listOfPosts.map((value, key) => {
        return <div> {value.title} </div>
      }) }
    </div>
  );
}

export default App;
