import React, {Component} from 'react';
import Card from './myCard';
import {connect} from 'react-redux';
import {itemsFetchData,sortAsPerRating,sortAsPerYear} from '../actions/actionCreator';
import Select from 'react-select';

const marginSpace = {
	marginRight: 15,
}

class Popular extends Component{
	constructor(props){
		super(props);
		this.state = {
			sortRate : "",
			sortYear : "",
		}
		this.logChange = this.logChange.bind(this)	
		this.logChangeYear = this.logChangeYear.bind(this)	
	}

	logChange(val) {
		this.setState({sortRate:val});
		if(val){
			this.props.sortRating(val.value);
		}
		
  		//console.log("Selected: " + val.value);
	}

	logChangeYear(val) {
		this.setState({sortYear:val});
		//this.props.sortYear(val.value);
  		console.log(typeof val.value);
	}

 	componentDidMount() {
        this.props.fetchData('https://api.themoviedb.org/3/movie/popular?api_key=784269b0ba4570888b9d1299897c4846&language=en-US');
        // this.props.sortRating(this.state.sortRate);
        // this.props.sortYear(this.state.sortYear);
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

		// console.log(options);

		return(
		<div>
			<Select className = "sortRating"
			   name="form-field-name"
			   value={this.state.sortRate}
			   options={optionsRater}
			   onChange={this.logChange}
			/>
			<Select className = "sortRating"
			   name="form-field-name"
			   value={this.state.sortYear}
			   options={optionsYear}
			   onChange={this.logChangeYear}
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
       sortRating: (val) => dispatch(sortAsPerRating(val)),
       //sortYear: (val) => dispatch(sortAsPerYear(val)),
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Popular);