import React, {Component} from 'react';
import './container.css';
import SingleCard from './SingleCard'

function isSearchTerm(searchItem){
	return function(item){
   		return !searchItem || item.title.toLowerCase().includes(searchItem.toLowerCase());
		}	
}

class Card extends Component{
	constructor(props){
		super(props);
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
			{this.props.data.filter(isSearchTerm(this.props.searchTermVal)).map(item=>
				<SingleCard key={item.id} item={item} />
			)}
			</div>
		);
	}
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


export default Card;