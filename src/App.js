import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Second from './Second';
import First from './First'
class App extends Component {


  render() {
    return (
      <div className="App">
      <Second />
<hr/>
<hr/>
<First />
<hr/>
<First />
<br/>
<Second />
      </div>
    );
  }
}

export default App;
