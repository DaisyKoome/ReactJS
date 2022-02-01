import React, { useState } from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
          <label>Username:</label>
          <input type="text" name="userName"/>
          <label>Password:</label>
          <input type="text" name="password"/>
          <button>Register</button>
      </div>
      <div className="login">
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
