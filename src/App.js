import React, { useState } from "react";
import Axios from 'axios'
import './App.css';

function App() {

  //create 2 states
  const[ usernameReg, setUsernameReg ] = useState('')
  const[ passwordReg, setPasswordReg ] = useState('')

  

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
          <button>Register</button>
      </div>
      <div className="form login">
        <h1>Login</h1>
          <label>Username:</label>
          <input type="text" name="userName" placeholder="Username ..."/>
          <label>Password:</label>
          <input type="text" name="password" placeholder="Password ..."/>
          <button>Register</button>
      </div>
    </div>
  );
}

export default App;
