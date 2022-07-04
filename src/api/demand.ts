import axios from 'axios';

export function createMainline(data: any) {
  return axios.post(`/mainline/createMainline`, data);
}

export function mainlineList() {
  return axios.post(`/mainline/mainlineList`);
}

// 创建需求
export function createDemand(data: any) {
  return axios.post(`/demand/createDemand`, data);
}

// 获取需求列表
export function demandList() {
  return axios.post(`/demand/getDemandList`);
}
