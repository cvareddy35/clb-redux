import { createStore } from 'redux';

const initialState = {
  count: 909,
  todos: [
    {
      id: 1,
      text: 'Learn React'
    },
    {
      id: 2,
      text: 'Learn Redux'
    },
    {
      id: 3,
      text: 'Go to Goa'
    }
  ]
}

const counterReducer = (state = initialState, action) => {
  //console.log('State is ', state);
  //console.log('Action is', action.type);
  switch(action.type) {
    case 'INC':
      return {...state, count: state.count + action.payload};
    case 'DEC':
      return {...state, count: state.count - action.payload};
    default:
      return state;
  }
}

const store = createStore(counterReducer);
export default store;

// store.subscribe(result => {
//   console.log('Store Update : ', store.getState().counter)
// })

// store.dispatch({type: 'INC', payload: 10});
// store.dispatch({type: 'INC', payload: 5});
// store.dispatch({type: 'INC', payload: 10});
// store.dispatch({type: 'DEC', payload: 5});
// store.dispatch({type: 'INC', payload: 178});