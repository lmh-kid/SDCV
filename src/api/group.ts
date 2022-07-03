import axios from 'axios';

export function queryGroups() {
  return axios.get('/groups');
}

export function queryGroupProjects(id: number) {
  return axios.get(`/group/projects?id=${id}`);
}
