import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
    theme: 'default'
});

function appReducer(state = initialState, action){
    return state;
}

export default appReducer;