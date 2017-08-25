import React, {Component} from 'react';
import './container.css';
import SingleCardFav from './SingleCardFav'

var count =0;

function isSearchTerm(searchItem){
	return function(item){
   		return !searchItem || item.title.toLowerCase().includes(searchItem.toLowerCase());
		}	
}

class FavCard extends Component{
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
        if (this.props.data.length == 0) { return null; }
		return(
			<div className="Favcontainer">
			{console.log(this.props.searchTermVal)}
			{this.props.data.filter(isSearchTerm(this.props.searchTermVal)).map(item=>
				<SingleCardFav item={item} />
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


export default FavCard;