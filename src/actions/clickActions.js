import { backendAPI, headers } from '../services/adapter';

export function addClickTerm(clickData) {
  return (dispatch) => {
    return fetch(`${backendAPI}/click`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({click_term: clickData})
    })
  }
}
