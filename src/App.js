import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="login">
        <h1> SIGN IN TO YOUR PIZZA PROFILE </h1>
        <div className="details">
          <label for="email">Email:</label>
          <input tpye="text" placeholder="Email"></input><br></br>
          <label for="password">Pswd:</label>
          <input tpye="text" placeholder="Password"></input><br></br>
        </div><br></br>
        <div><button>   LOGIN </button> </div>
      </div>
    );

  }
}
export default App;
