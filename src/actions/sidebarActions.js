import { TOGGLE_SIDEBAR_VISIBLITY } from './actionTypes';

export function toggleSideBarVisibility() {
  return (dispatch) => {
    dispatch({ type: TOGGLE_SIDEBAR_VISIBLITY })
  }
}
