import React, { Component } from 'react';
import './App.css';
import Header from './header.js'
import Fav from '../containers/fav.js'

class Favourites extends Component {
  render() {
    return (
      <div className="Fav">
          <Header/>
          <Fav/>
      </div>
    );
  }
}

export default Favourites;