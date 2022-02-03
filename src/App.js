import React, { useState } from "react";
//axios replicates fetch function for making http requests
import Axios from 'axios'
import './App.css';

function App() {

  //create 2 states for registration
  const[ usernameReg, setUsernameReg ] = useState('');
  const[ passwordReg, setPasswordReg ] = useState('');

  //states for login
  const[ username, setUsername ] = useState('');
  const[ password, setPassword ] = useState('');  

  /*create a function that makes the data go to backend 
  (for insertion into DB) when submit button is clicked
  - Parse in it an object with uname and pswd properties*/
  const register = () => {
    Axios.post('http://localhost:3001/register', {
      //these 2 variables are being sent to the backend
      username:usernameReg, 
      password:passwordReg
      //then grab the response and console.log it
    }).then((response)=> {
      /* if an error occurs, we'll see it 
      if no error, a response will still be displayed*/
      console.log(response);
    });
  };

  return (
    <div className="App">
      <div className="form registration">
        <h1>Registration</h1>
          <label>Username:</label>
          <input type="text" 
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }} name="userName"/>
          <label>Password:</label>
          <input type="text" 
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }} name="password"/>
          <button onClick = {register}>Register</button>
      </div>



      <div className="form login">
        <h1>Login</h1>
          <label>Username:</label>
          <input type="text" onChange={(e) => {
            setUsername(e.target.value);
          }} name="usernameLog" placeholder="Username ..."/>
          <label>Password:</label>
          <input type="text" onChange={(e) => {
            setUserPassword(e.target.value);
          }} name="passwordLog" placeholder="Password ..."/>
          <button>Register</button>
      </div>
    </div>
  );
}

export default App;
