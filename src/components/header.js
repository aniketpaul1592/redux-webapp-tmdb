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
		this.state = {
			flag:0,
		}
		this.getSearchTerm = this.getSearchTerm.bind(this);
		this.showSearchBar = this.showSearchBar.bind(this);
		this.hideSearchBar = this.hideSearchBar.bind(this);
	}

	showSearchBar(){
		this.setState({flag:1});
	}

	hideSearchBar(){
		this.setState({flag:0});
		this.props.updateSearch("");
	}

	getSearchTerm(event){
		//alert('Hello world')
		this.props.updateSearch(event.target.value)
	}

render(){
	if(this.state.flag===1){	
			return(
			<div className="headerLayoutApp">
			<Link to="/"><img src={logo} className="logo cursorClass" alt ="" align="left"/></Link>     
	          <div className = "shiftRight">
	          	<input type = "text" onChange={ this.getSearchTerm }/><FontAwesome name='search' className = "cursorClass" onClick = {this.hideSearchBar}/>
	          </div>
	        </div>
			);		
	}else{
			return(
			<div className="headerLayoutApp">
			<Link to="/"><img src={logo} className="logo cursorClass" alt ="" align="left"/></Link>     
	          <div className = "shiftRight">
	          	<Link to="/" style = {marginSpace}>Popular</Link>
	          	<Link to="/favorite" style = {marginSpace}>Favourites</Link>
	          	<FontAwesome name='search' className = "cursorClass" onClick = {this.showSearchBar}/>
	          </div>
	        </div>
			);
		}
	}	
}

// Dispatch Action creator
const matchDispatchToProps = (dispatch) => {
	return {
		updateSearch: (value) => dispatch(searchParameter(value))
	};
}

export default connect(null,matchDispatchToProps)(Header);