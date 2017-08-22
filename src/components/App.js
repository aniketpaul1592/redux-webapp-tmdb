import React, { Component } from 'react';
import './App.css';
import Header from './header.js'
import Popular from '../containers/popular.js'

class App extends Component {
  constructor(props){
    super(props);
   
  }
  
  render() {
    return (
      <div className="App">
          <Header/>
          <Popular/>
      </div>
    );
  }
}

export default App;
