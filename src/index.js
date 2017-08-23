import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Fav from './containers/fav';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import configureStore from './store/configureStore.js';

const store = configureStore();

ReactDOM.render(
	<Provider store = {store}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component = {App}/>
				<Route exact path ="/favorite" component = {Fav}/>
			</Switch>
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
