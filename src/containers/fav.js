import React, {Component} from 'react';
import Header from '../components/header.js'

class Fav extends Component{
	render(){
		return(
			<div>
				<Header updateSearch={this.updateSearch}/>
				<h2>Fav JS</h2>
			</div>
		);
	}
}

export default Fav;