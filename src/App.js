import React, { Component } from 'react';
import './exercise2/styles.css';
import makeDrawing from './exercise2/drawing';

class App extends Component {
  componentDidMount() {
    const ctx = this.canvas.getContext('2d');
    makeDrawing(ctx);
  }

  render() {
    return (
      <div className="App">
        <h1>More drawing to canvas</h1>
        <canvas ref={(el) => { this.canvas = el; }} width="400" height="400" />
      </div>
    );
  }
}

export default App;
