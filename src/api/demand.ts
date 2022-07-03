import axios from 'axios';

export function createMainline(data: any) {
  console.log('createMainline', data);
  return axios.post(`/mainline/createMainline`, data);
}

export function mainlineList() {
  return axios.post(`/mainline/mainlineList`);
}
