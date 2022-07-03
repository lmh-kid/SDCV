import axios from 'axios';

export function queryProjectBranchs(data: any) {
  return axios.post(`/groupBranchs`, data);
}

export function createNewBranch(data: any) {
  return axios.post(`/newBranch`, data);
}
