import React, {Component} from 'react';
import {removeFavId} from '../actions/actionCreator';
import FontAwesome from 'react-fontawesome';
import {connect} from 'react-redux';

class SingleCardFav extends Component{
	constructor(props){
		super(props);
		this.state = {
			test:"heart",
		}
		this.removeFavourites = this.removeFavourites.bind(this);
	}

	removeFavourites(itemId){
		this.setState({test:"heart-o"});
		this.props.removeFavId(itemId);
	}
	
	render(){
		return(
			<div key={this.props.item.id} className="paddingCard">
				<div className="cardTitle">{this.props.item.title}</div>
				<div className="poster">
					<img src = {"https://image.tmdb.org/t/p/w300/"+this.props.item.poster_path} alt=""/>
				</div>
				<div className = "faIcons">
					<FontAwesome name='facebook-official' size='2x' style ={{color:"blue"}} />
					<FontAwesome name='whatsapp' size='2x' style ={{color:"green"}}/>
					<FontAwesome name='twitter-square' size='2x' style ={{color:"#4099FF"}}/>
					<FontAwesome name={this.state.test} size='2x' style ={{color:"red"},{float:"right"}} onClick = {() =>this.removeFavourites(this.props.item)}/>
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch){
	return {
		removeFavId : (itemId) => dispatch(removeFavId(itemId)),
	};
}

export default connect(null,mapDispatchToProps)(SingleCardFav);