import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';
import { fromJS } from 'immutable';


// Initial routing state
const routeInitialState = fromJS({
  location: null,
});

//https://github.com/reactjs/react-router-redux#what-if-i-use-immutablejs-or-another-state-wrapper-with-my-redux-store
export function routeReducer(state = routeInitialState, action) {
    switch (action.type) {      
      case LOCATION_CHANGE:
        return state.merge({
          location: action.payload,
        });
      default:
        return state;
    }
  }

export default function createReducer() {
    return combineReducers({
      route: routeReducer
    });
  }
  