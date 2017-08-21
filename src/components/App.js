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
        <div>
          <Header updateSearch={this.updateSearch}/>
        </div>
        <div>
          <Popular searchTerm={this.state.searchTerm}/>
        </div>
      </div>
    );
  }
}

export default App;
