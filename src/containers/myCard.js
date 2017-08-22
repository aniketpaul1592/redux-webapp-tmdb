import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
var count =0;

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
			{console.log(this.props.searchTermVal)}
			{this.props.data.filter(isSearchTerm(this.props.searchTermVal)).map(item=>
				<div key={item.id} className="paddingCard">
					<div className="poster"><img src = {"https://image.tmdb.org/t/p/w300/"+item.poster_path} /></div>
					<span>{item.title}</span>
					<FontAwesome name='facebook-official'/>
					<FontAwesome name='whatsapp'/>
					<FontAwesome name='twitter-square'/>
					<FontAwesome name='heart' style ={{color:"red"}} />
				</div>
			)}
			</div>
		);
	}
}

export default Card;