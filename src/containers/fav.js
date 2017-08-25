import React, {Component} from 'react';
import FavCard from './myCardFav';
import {connect} from 'react-redux';

class Fav extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
		<div>			
			<FavCard data={this.props.movieData.favArr} searchTermVal = {this.props.searchTerm}/>
        </div>
		);
	}
}

function mapStateToProps(state){
	//console.log(state);
	return{
		movieData: state.favArr,
		searchTerm : state.searchTerm,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
	};
}
export default connect(mapStateToProps)(Fav);