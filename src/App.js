import React, { Component } from 'react';
import './App.css';
import FlowContainer from './components/FlowContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to my Flow app</h2>
        </div>
        <FlowContainer/>
      </div>
    );
  }
}

export default App;
