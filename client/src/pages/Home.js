import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
//useHistory allows us to redirect and navigate to other places in our application
import { useNavigate } from 'react-router-dom';

function Home() {

  //state containing all posts from the API request
  const[listOfPosts, setListOfPosts] = useState([]);

  //history object with a function called push
  let history = useNavigate();

  const redirect = path => {
    history(path);
  };

  //axios enables a user to make API requests very easily

  //To make a GET Request
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div>

{ listOfPosts.map((value, key) => {
        /* when you click on this div post, 
        push to history so go to the route described by /post
        (``) backticks are used becoz an id will be added 
        ${} means you can add JS variables in there - parse the id form DB*/
        return <div className='post' onClick={() => redirect(`/post/${value.id}`) }> 
        <div className='title'> {value.title} </div>
        <div className='body'> {value.postText} </div>
        <div className='footer'> {value.username} </div>
        </div>
      }) }

    </div>
  )

}

export default Home;