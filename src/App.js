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
       <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
       <Button as="input" type="button" value="Input" />{' '}
       <Button as="input" type="submit" value="Submit" />{' '}
       <Button as="input" type="reset" value="Reset" />
       </div>
    </div>
    );
  }
}

export default App;
