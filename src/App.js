import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let textColor = 'lime';
let defaultStyle = {
  color: textColor
};

class Aggregate extends Component {
  render() {
    let color = 'red'
    return (
      <div style={{...defaultStyle, width: '40%', display: 'inline-block', background: 'black', margin:'5px'}}>
        <h2>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    let color = 'red'
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    let color = 'red'
    return (
      <div style={{...defaultStyle, width:'30%', background:'maroon', display:'inline-block', margin: '10px'}}>
{/*using spread operator ...defaultStyle*/}
        <img/>
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Title</h1>
      <Aggregate/>
      <Aggregate/>
      <Filter/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      </div>
    );
  }
}

export default App;
