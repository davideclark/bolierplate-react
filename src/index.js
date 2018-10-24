import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './containers/App'
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './configureStore';
import {Router} from 'react-router';


const history = createHistory();
const initialState = {};
const store = configureStore(initialState, history)
const MOUNT_NODE = document.getElementById('app');


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />     
        </Router>
    </Provider>,
    MOUNT_NODE,    
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();