import axios from 'axios';

export const $instants = axios.create({
  baseURL: 'https://readjourney.b.goit.study/api',
});

$instants.interceptors.request.use(function (config) {
  const token = window.localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
