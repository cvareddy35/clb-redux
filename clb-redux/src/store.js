import { createStore } from 'redux';

const initialState = {
  counter: 1890
}

const rootReducer = (state = initialState, action) => {
  //console.log('State is ', state);
  //console.log('Action is', action.type);
  switch(action.type) {
    case 'INC':
      return {...state, counter: state.counter + action.payload};
    case 'DEC':
      return {...state, counter: state.counter - action.payload};
    default:
      return state;
  }
}

const store = createStore(rootReducer);
export default store;

// store.subscribe(result => {
//   console.log('Store Update : ', store.getState().counter)
// })

// store.dispatch({type: 'INC', payload: 10});
// store.dispatch({type: 'INC', payload: 5});
// store.dispatch({type: 'INC', payload: 10});
// store.dispatch({type: 'DEC', payload: 5});
// store.dispatch({type: 'INC', payload: 178});