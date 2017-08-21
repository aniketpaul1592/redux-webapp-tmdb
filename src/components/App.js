import React, { Component } from 'react';
import './App.css';
import Header from './header.js'
import Popular from '../containers/popular';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.updateSearch = this.updateSearch.bind(this)
  }

  updateSearch(event){
    this.setState({
      searchTerm:event.target.value
    });
  }

  render() {
    return (
      <div className="App">
          <Header updateSearch={this.updateSearch}/>
          <Popular searchTerm={this.state.searchTerm}/>
      </div>
    );
  }
}

export default App;
