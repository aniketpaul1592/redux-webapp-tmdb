import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../reducers/combineReducerFile.js';

export default function configureStore(initialState) {
    return createStore(
        allReducers,
        initialState,
        applyMiddleware(thunk)
    );
}