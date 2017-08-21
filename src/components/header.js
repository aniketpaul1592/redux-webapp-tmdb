import React, { Component } from 'react';
import logo from '../logo.png';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const marginSpace = {
	marginRight: 15,
}

class Header extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
		<div className="headerLayoutApp">
		<Link to="/"><img src={logo} className="logo" align="left"/></Link>     
          <div className = "shiftRight">
          	<Link to="/" style = {marginSpace}>Popular</Link>
          	<Link to="/favorite" style = {marginSpace}>Favourites</Link>
          	<input type = "text" onChange={this.props.updateSearch}/><FontAwesome name='search'/>
          </div>
        </div>
		);
	}
}

export default Header;