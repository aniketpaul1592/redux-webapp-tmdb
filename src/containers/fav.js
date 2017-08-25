import React, {Component} from 'react';
import FavCard from './myCardFav';
import {connect} from 'react-redux';
import {itemsFetchData,sortAsPerRatingYear} from '../actions/actionCreator';
import Select from 'react-select';

const marginSpace = {
	marginRight: 15,
}

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