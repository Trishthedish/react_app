import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>


        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Another paragaraph</p>
      <img src="https://www.placecage.com/gif/200/300" alt="Nick Cage"/>
        <table>
           <thead>
             <tr>
               <th>Name</th>
               <th>Price</th>
             </tr>
           </thead>
           <tbody>jj</tbody>
         
         </table>
      </div>
    );
  }
}

export default App;
