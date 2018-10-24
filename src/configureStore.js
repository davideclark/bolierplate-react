import { createStore,  applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import createReducer from './reducers';

export default function configureStore (initialState = {}, history) {

    // Create the store with middlewares    
    // 1. composeWithDevTools: Enables chrome extention plugin for debugging and timeline features of app state
    // 2. routerMiddleware: Syncs the location/URL path to the state    
    const middlewares = [composeWithDevTools, routerMiddleware(history)];
    const enhancers = compose([applyMiddleware(...middlewares)]);


      // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // TODO: Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
        // Prevent recomputing reducers for `replaceReducer`
        shouldHotReload: false,
      })
    : compose;

  
    const store = createStore(
        createReducer(),        
        initialState,
        composeEnhancers(...enhancers),
    );

    return store;
}