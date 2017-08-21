import React, {Component} from 'react';
import Card from './myCard';
import {connect} from 'react-redux';
import {itemsFetchData} from '../actions/actionCreator';
import { Button,DropdownButton,MenuItem } from 'react-bootstrap';

const marginSpace = {
	marginRight: 15,
}

class Popular extends Component{
	constructor(props){
		super(props);
		this.state = {
			searchTerm:""
		}
		this.handleRating = this.handleRating.bind(this);
	}
	handleRating(event){
		this.setState({searchTerm:event.target.value});
	}
 	componentDidMount() {
        this.props.fetchData('https://api.themoviedb.org/3/movie/popular?api_key=784269b0ba4570888b9d1299897c4846&language=en-US');
    }

    componentWillReceiveProps(nextProps){ //Constructor is called only once re-render may not call constructor again
    this.setState({searchTerm: nextProps.searchTerm}); 
  	} 

	render(){
		if (!this.props.movieData) { return null; }
		return(
		<div>
			<select onChange = {this.handleRating}>
			  <option value="rlow">Rating Low</option>
			  <option value="rhigh">Rating High</option>
			  <option value="plow">Popularity Low</option>
			  <option value="phigh">Popularity High</option>
			</select>
			<Card data={this.props.movieData.results} searchTerm = {this.state.searchTerm}/>	
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