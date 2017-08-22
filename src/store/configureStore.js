import { createStore, applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../reducers/combineReducerFile.js';

export default function configureStore(initialState) {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        allReducers,
        initialState,
         /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
    );
}