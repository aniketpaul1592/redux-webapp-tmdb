import {combineReducers} from 'redux';
import { items, itemsHasErrored, itemsIsLoading,searchTerm } from './fetchApiData';

const allReducers = combineReducers({
	items, 
	itemsHasErrored, 
	itemsIsLoading,
	searchTerm
});

export default allReducers;
