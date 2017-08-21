import {combineReducers} from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './fetchApiData';

const allReducers = combineReducers({
	items, 
	itemsHasErrored, 
	itemsIsLoading
});

export default allReducers;
