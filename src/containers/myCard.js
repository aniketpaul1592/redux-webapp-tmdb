import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import './container.css';
import {connect} from 'react-redux';
import {fetchFavId} from '../actions/actionCreator';

var count =0;

function isSearchTerm(searchItem){
	return function(item){
   		return !searchItem || item.title.toLowerCase().includes(searchItem.toLowerCase());
		}	
}

class Card extends Component{
	constructor(props){
		super(props);
		this.state = {
			test:"heart-o",
		}
		this.setFavourites = this.setFavourites.bind(this);
	}

	setFavourites(itemId){
		this.setState({test:"heart"});
		this.props.fetchFavId(itemId);
	}
	
	render(){
		if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        if (!this.props.data) { return null; }
		return(
			<div className="container">
			{console.log(this.props.searchTermVal)}
			{this.props.data.filter(isSearchTerm(this.props.searchTermVal)).map(item=>
				<div key={item.id} className="paddingCard">
					<div className="cardTitle">{item.title}</div>
					<div className="poster"><img src = {"https://image.tmdb.org/t/p/w300/"+item.poster_path} alt=""/></div>
					<FontAwesome name='facebook-official'/>
					<FontAwesome name='whatsapp'/>
					<FontAwesome name='twitter-square'/>
					<FontAwesome name={this.state.test} style ={{color:"red"}} onClick = {() => this.setFavourites(item.id)}/>
				</div>
			)}
			</div>
		);
	}
}

function mapDispatchToProps(dispatch){
	return {
		fetchFavId : (itemId) => dispatch(fetchFavId(itemId)),
	};
}

// function mapStateToProps(state){
// 	//console.log(state);
// 	return{
// 		movieData: state.items,
// 		searchTerm : state.searchTerm,
//         hasErrored: state.itemsHasErrored,
//         isLoading: state.itemsIsLoading
// 	};
// }


export default connect(null,mapDispatchToProps)(Card);