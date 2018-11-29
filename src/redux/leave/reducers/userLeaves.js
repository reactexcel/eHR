import Immutable from 'immutable';

let initialState = {
  'leaves': [],
  'RHLeaves':[]
};

export function userLeaves (state = Immutable.fromJS(initialState), action) {  
  if (action.type === 'ACTION_LIST_MY_LEAVES_SUCCESS') {
    return state.set('leaves', action.payload.leaves);
  } else if (action.type === 'ACTION_LIST_MY_LEAVES_EMPTY') {
    return state.set('leaves', action.payload);
  } else if (action.type === 'ACTION_LIST_MY_LEAVES_ERROR') {
    return state.set('leaves', action.payload);
  } else if (action.type === 'REQUEST_RH_LIST_SUCCESS') {    
    return state.set('RHLeaves', action.payload);
  } else if (action.type === 'REQUEST_RH_LIST_ERROR') {
    return state.set('RHLeaves', action.payload);
  } 
  else {
    return state;
  }
}
