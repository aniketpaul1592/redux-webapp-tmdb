import React, { Component } from 'react';
import logo from '../logo.png';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import FontAwesome from 'react-fontawesome';
import {searchParameter} from '../actions/actionCreator';

const marginSpace = {
	marginRight: 15,
}

class Header extends Component{
	constructor(props){
		super(props);
		this.getSearchTerm = this.getSearchTerm.bind(this)
	}

	getSearchTerm(event){
		//alert('Hello world')
		this.props.updateSearch(event.target.value)
	}
	render(){
		return(
		<div className="headerLayoutApp">
		<Link to="/"><img src={logo} className="logo" align="left"/></Link>     
          <div className = "shiftRight">
          	<Link to="/" style = {marginSpace}>Popular</Link>
          	<Link to="/favorite" style = {marginSpace}>Favourites</Link>
          	<input type = "text" onChange={ this.getSearchTerm }/><FontAwesome name='search'/>
          </div>
        </div>
		);
	}
}

// Dispatch Action creator
const matchDispatchToProps = (dispatch) => {
	return {
		updateSearch: (value) => dispatch(searchParameter(value))
	};
}

export default connect(null,matchDispatchToProps)(Header);