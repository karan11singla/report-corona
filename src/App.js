import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Self-Report Covid-19 CoronaVirus</h2>
        </div>
       <div class="embed-container">
       <iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="Coronavirus - India" src="//akiboy96.maps.arcgis.com/apps/Embed/index.html?webmap=733b02909c9a486fb06cc772c14b32e1&extent=-180,-73.418,180,81.0989&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"></iframe></div>
      </div>
    );
  }
}

export default App;
