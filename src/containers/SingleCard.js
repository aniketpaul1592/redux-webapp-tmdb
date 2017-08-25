import React, {Component} from 'react';
import {fetchFavId,removeFavId} from '../actions/actionCreator';
import FontAwesome from 'react-fontawesome';
import {connect} from 'react-redux';
import './container.css';

class SingleCard extends Component{
	constructor(props){
		super(props);
		this.state = {
			test:"heart-o",
		}
		this.setFavourites = this.setFavourites.bind(this);
		this.removeFavourites = this.removeFavourites.bind(this);
	}

	removeFavourites(itemId){
		this.setState({test:"heart-o"});
		this.props.removeFavId(itemId);
	}

	setFavourites(itemId){
		this.setState({test:"heart"});
		this.props.fetchFavId(itemId);
	}
	
	render(){
		if(this.state.test == "heart"){
			return(
				<div key={this.props.item.id} className="paddingCard">
					<div className="cardTitle">{this.props.item.title}</div>
					<div className="poster">
						<img src = {"https://image.tmdb.org/t/p/w300/"+this.props.item.poster_path} alt=""/>
					</div>
					<div className = "faIcons">
						<FontAwesome className = "facebook" name='facebook-official' size='2x'/>
						<FontAwesome className = "whatsapp" name='whatsapp' size='2x' />
						<FontAwesome className = "twitter" 	name='twitter-square' size='2x' />
						<FontAwesome className= "heartShape" name={this.state.test} size='2x' onClick = {() =>this.removeFavourites(this.props.item)}/>
						<span className="Votes">Votes:{this.props.item.vote_count}</span>
					</div>
				</div>
			);
		}else if((this.props.favMovieArray.length > 0)&&(this.props.favMovieArray.indexOf(this.props.item.id) != -1)){
			return(
				<div key={this.props.item.id} className="paddingCard">
					<div className="cardTitle">{this.props.item.title}</div>
					<div className="poster">
						<img src = {"https://image.tmdb.org/t/p/w300/"+this.props.item.poster_path} alt=""/>
					</div>
					<div className = "faIcons">
						<FontAwesome className = "facebook" name='facebook-official' size='2x'/>
						<FontAwesome className = "whatsapp" name='whatsapp' size='2x' />
						<FontAwesome className = "twitter" 	name='twitter-square' size='2x' />
						<FontAwesome className= "heartShape" name="heart" size='2x' onClick = {() =>this.removeFavourites(this.props.item)}/>
						<span className="Votes">Votes:{this.props.item.vote_count}</span>
					</div>
				</div>
			);
		}else{
			return(
				<div key={this.props.item.id} className="paddingCard">
					<div className="cardTitle">{this.props.item.title}</div>
					<div className="poster">
						<img src = {"https://image.tmdb.org/t/p/w300/"+this.props.item.poster_path} alt=""/>
					</div>
					<div className = "faIcons">
						<FontAwesome className = "facebook" name='facebook-official' size='2x'/>
						<FontAwesome className = "whatsapp" name='whatsapp' size='2x' />
						<FontAwesome className = "twitter" 	name='twitter-square' size='2x' />
						<FontAwesome className= "heartShape" name={this.state.test} size='2x' onClick = {() =>this.setFavourites(this.props.item)}/>
						<span className="Votes">Votes:{this.props.item.vote_count}</span>
					</div>
				</div>
			);
		}
		
	}
}

function mapStateToProps(state){
	return{
		favMovieArray : state.favArr.favArrId,
	};
}

function mapDispatchToProps(dispatch){
	return {
		fetchFavId : (itemId) => dispatch(fetchFavId(itemId)),
		removeFavId : (itemId) => dispatch(removeFavId(itemId)),
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleCard);