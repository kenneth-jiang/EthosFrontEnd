export const backendAPI = 'https://ethos-back-end.herokuapp.com/api/v1';

export const headers = () => {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': localStorage.getItem('token')
  }
}
