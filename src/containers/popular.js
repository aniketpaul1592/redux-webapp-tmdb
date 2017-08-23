import React, {Component} from 'react';
import Card from './myCard';
import {connect} from 'react-redux';
import {itemsFetchData,sortAsPerRatingYear,updateYear,updateRatings} from '../actions/actionCreator';
import Select from 'react-select';

const marginSpace = {
	marginRight: 15,
}

class Popular extends Component{
	constructor(props){
		super(props);
		this.state = {
			sortRate:"",
			sortYear:""
		}
		this.getRatings = this.getRatings.bind(this)	
		this.getYear = this.getYear.bind(this)	
	}

	getRatings(val) {
		this.setState({sortRate:val});
		this.props.updateRatings(val.value);
		this.props.sortAsPerRatingYear(); 
	}

	getYear(val) {
		this.setState({sortYear:val});
		this.props.updateYear(val.value);
		this.props.sortAsPerRatingYear(); 
	}

 	componentDidMount() {
        this.props.fetchData('https://api.themoviedb.org/3/movie/popular?api_key=784269b0ba4570888b9d1299897c4846&language=en-US');
    }

    componentWillReceiveProps(nextProps) { 
    	console.log(nextProps);
    // 	nextProps.sortAsPerRatingYear(nextState);  
    }

	render(){
		if (!this.props.movieData) { return "Nothing to Display"; }
		var optionsRater = [
	  		{ label: 'Rating Low', value: 'rLow' },
	  		{ label: 'Rating High', value: 'rHigh' },
	  		{ label: 'Popularity Low', value: 'pLow' },
	  		{ label: 'Popularity High', value: 'pHigh' }
		];
		var optionsYear = [];

		if(this.props.movieData.results){
			var tempArr = [];
			this.props.movieData.results.map((item) => { 
				var temp = item.release_date.split("-");
				if(tempArr.indexOf(temp[0]) == -1){
					var objectS = { 
						label: temp[0], 
						value: temp[0] 
					};
					optionsYear.push(objectS);
					tempArr.push(temp[0]);
				}
			});
		}

		return(
		<div>
			<Select className = "sortRating"
			   name="form-field-name"
			   value={this.state.sortRate}
			   options={optionsRater}
			   onChange={this.getRatings}
			/>
			<Select className = "sortRating"
			   name="form-field-name"
			   value={this.state.sortYear}
			   options={optionsYear}
			   onChange={this.getYear}
			/>
			<Card data={this.props.movieData.results} searchTermVal = {this.props.searchTerm}/>	
        </div>
		);
	}
}

function mapStateToProps(state){
	//console.log(state);
	return{
		movieData: state.items,
		searchTerm : state.searchTerm,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        sortRate: state.sortRate,
        sortYear: state.sortYear
	};
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
       	sortAsPerRatingYear: () => dispatch(sortAsPerRatingYear()),
       	updateRatings:(ratings) => dispatch(updateRatings(ratings)),
       	updateYear:(year) => dispatch(updateYear(year)),
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Popular);