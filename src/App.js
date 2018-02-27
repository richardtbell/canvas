import React, { Component } from 'react';
import './index.css';
import makeDrawing from './canvasItems/drawing';

class App extends Component {
  componentDidMount() {
    const ctx = this.canvas.getContext('2d');
    makeDrawing(ctx);
  }

  render() {
    return (
      <div className="App">
        <canvas ref={(el) => { this.canvas = el; }} width="400" height="400" />
      </div>
    );
  }
}

export default App;
