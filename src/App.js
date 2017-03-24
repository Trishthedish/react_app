import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Collection } from 'react-virtualized';
import 'react-virtualized/styles.css'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Swappable</h2>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Another paragaraph</p>

    <table className="ReactVirtualized_Table">
        <img src="https://www.placecage.com/gif/200/300" alt="Nick Cage"/>

          <tbody>
            <tr className="ReactVirtualized_Table_headerColumn">
              <th className="ReactVirtualized_Table_headerColumn">Engine</th>
              <th className="ReactVirtualized_Table_headerColumn">Locale Regex</th>
              <th className="ReactVirtualized_Table_headerColumn">Locale Regex</th>
              <th className="ReactVirtualized_Table_headerColumn">Strategy</th>
              <th className="ReactVirtualized_Table_headerColumn">Max Tries</th>
              <th >Proxy Balancers</th>
            </tr>
            <tr>
              <td>google</td>
              <td>ko-KR</td>
              <td>first_page</td>
              <td>0</td>
              <td>google_ec2_us</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
