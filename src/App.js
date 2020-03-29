import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button} from 'react-bootstrap';
import './Map.js'


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Self-Report Covid-20 CoronaVirus</h2>
        </div>
       <div class="embed-container">
       <iframe width="400" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="Coronavirus - India" src="//akiboy96.maps.arcgis.com/apps/Embed/index.html?webmap=733b02909c9a486fb06cc772c14b32e1&extent=-180,-72.7433,180,81.4506&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&legend=true&basemap_gallery=true&disable_scroll=true&theme=dark"></iframe></div>  
     <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
     <Button as="input" type="button" value="Input" />{' '}
     <Button as="input" type="submit" value="Submit" />{' '}
     <Button as="input" type="reset" value="Reset" />
     </div>
    );
  }
}

export default App;
