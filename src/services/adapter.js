export const backendAPI = 'http://localhost:3001/api/v1';

export const headers = () => {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': localStorage.getItem('token')
  }
}
