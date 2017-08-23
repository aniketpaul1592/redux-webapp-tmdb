import {combineReducers} from 'redux';
import { items, itemsHasErrored, itemsIsLoading,searchTerm,currRatings,currYear } from './fetchApiData';

const allReducers = combineReducers({
	items, 
	itemsHasErrored, 
	itemsIsLoading,
	searchTerm,
	currRatings,
	currYear
});

export default allReducers;
