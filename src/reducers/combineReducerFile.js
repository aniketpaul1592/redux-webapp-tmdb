import {combineReducers} from 'redux';
import { items, itemsHasErrored, itemsIsLoading,searchTerm,currRatings,currYear,favArr} from './fetchApiData';

const allReducers = combineReducers({
	items, 
	itemsHasErrored, 
	itemsIsLoading,
	searchTerm,
	favArr
});

export default allReducers;
