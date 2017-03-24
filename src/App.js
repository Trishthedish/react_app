import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// ES6
import Draggable, {DraggableCore} from 'react-draggable'; // The default and <DraggableCore>


class App extends Component {
  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event ', event);
    console.log('Data', data);
  };

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

        <div>
          <Draggable
            axis="y"
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[25,25]}
            zIndex={100}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div>
              <div className="handle">Drag from here</div>
              <div>This Readme is dragging on ...</div>
            <div>
              <table>
                <tr>
                  <th>Engine</th>
                  <th>Locale Regex</th>
                  <th>Strategy</th>
                  <th>Max Tries</th>
                  <th>Proxy Balancers</th>
                </tr>
                <tr>
                  <td>engine</td>
                  <td>locale_regex</td>
                  <td>strategy</td>
                  <td>max_tries</td>
                  <td>proxy_balancer</td>
                </tr>
              </table>
            </div>
            </div>
          </Draggable>
        </div>


      </div>
    );
  }
}

export default App;
