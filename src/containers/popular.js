import React, {Component} from 'react';
import Card from './myCard';
import {connect} from 'react-redux';
import {itemsFetchData,sortAsPerRatingYear} from '../actions/actionCreator';
import Select from 'react-select';

const marginSpace = {
	marginRight: 15,
}

class Popular extends Component{
	constructor(props){
		super(props);
		this.state = {
			ratingLabel:"",
			yearLabel:"",
		}
		this.getRatings = this.getRatings.bind(this)	
		this.getYear = this.getYear.bind(this)	
	}

	getRatings(val) {
		this.setState({ratingLabel:val});
		console.log(val);
		var temp = {
			"sortRate": (val)?val.value : val,
			"sortYear": (this.state.yearLabel)?this.state.yearLabel.value : this.state.yearLabel
		};
		this.props.sortAsPerRatingYear(temp); 
	}

	getYear(val) {
		this.setState({yearLabel:val});	
		console.log(val);	
		var temp = {
			"sortRate": (this.state.ratingLabel)?this.state.ratingLabel.value : this.state.ratingLabel,
			"sortYear": (val)?val.value : val 
		};
		this.props.sortAsPerRatingYear(temp); 
	}

 	componentDidMount() {
        this.props.fetchData('https://api.themoviedb.org/3/movie/popular?api_key=784269b0ba4570888b9d1299897c4846&language=en-US');
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
		if(this.props.movieData.sorted){
			if(this.props.movieData.sorted.length != 0){
				return(
				<div>
					<Select className = "sortRating"
					   name="form-field-name"
					   value={this.state.ratingLabel}
					   options={optionsRater}
					   onChange={this.getRatings}
					/>
					<Select className = "sortRating"
					   name="form-field-name"
					   value={this.state.yearLabel}
					   options={optionsYear}
					   onChange={this.getYear}
					/>
					<Card data={this.props.movieData.sorted} searchTermVal = {this.props.searchTerm}/>	
		        </div>
				);
			}
		}
		return(
		<div>
			<Select className = "sortRating"
			   name="form-field-name"
			   value={this.state.ratingLabel}
			   options={optionsRater}
			   onChange={this.getRatings}
			/>
			<Select className = "sortRating"
			   name="form-field-name"
			   value={this.state.yearLabel}
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
        isLoading: state.itemsIsLoading
	};
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
       	sortAsPerRatingYear: (val) => dispatch(sortAsPerRatingYear(val)),
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Popular);