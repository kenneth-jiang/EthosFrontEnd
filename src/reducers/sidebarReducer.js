import { TOGGLE_SIDEBAR_VISIBLITY } from '../actions/actionTypes';


export default(state = {toggleVisibility: true}, action) => {
  switch (action.type) {
    case (TOGGLE_SIDEBAR_VISIBLITY):
      return {...state, toggleVisibility: !state.toggleVisibility };
    default:
      return state;
  }
}
