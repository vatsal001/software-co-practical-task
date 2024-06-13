import axios from 'axios';

const mockApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchEmployees = async () => {
  const response = await mockApi.get('/users');
  return response.data;
};

export const fetchWorkspaces = async () => {
  const response = await mockApi.get('/todos');
  return response.data;
};
