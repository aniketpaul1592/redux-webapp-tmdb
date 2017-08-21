import React, {Component} from 'react';
import Card from './myCard';
import {connect} from 'react-redux';
import {itemsFetchData} from '../actions/actionCreator';

const marginSpace = {
	marginRight: 15,
}

class Popular extends Component{
	constructor(props){
		super(props);
	}
 	componentDidMount() {
        this.props.fetchData('https://api.themoviedb.org/3/movie/popular?api_key=784269b0ba4570888b9d1299897c4846&language=en-US');
    }
	render(){
		if (!this.props.movieData) { return null; }
		return(
		<div>
			<Card data={this.props.movieData.results} searchTerm = {this.props.searchTerm}/>	
        </div>
		);
	}
}

function mapStateToProps(state){
	console.log(state);
	return{
		movieData: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
	};
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Popular);