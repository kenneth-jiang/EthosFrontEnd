import { backendAPI, headers } from '../services/Adapter';

export function addClickTerm(clickData) {
  return (dispatch) => {
    return fetch(`${backendAPI}/click`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({click_term: clickData})
    })
  }
}
