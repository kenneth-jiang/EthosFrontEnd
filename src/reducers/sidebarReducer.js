import { TOGGLE_SIDEBAR_VISIBLITY } from '../actions/actionTypes';


const INITIAL_STATE = {toggleVisibility: true};

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (TOGGLE_SIDEBAR_VISIBLITY):
      return {...state, toggleVisibility: !state.toggleVisibility };
    default:
      return state;
  }
}
