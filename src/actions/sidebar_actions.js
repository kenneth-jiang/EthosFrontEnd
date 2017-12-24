export function toggleSideBarButton() {
  return (dispatch) => {
    dispatch({ type: 'TOGGLE_VISIBLITY' })
  }
}
