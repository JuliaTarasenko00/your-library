import axios from 'axios';

export const $instants = axios.create({
  baseURL: 'https://readjourney.b.goit.study/api',
});

$instants.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

$instants.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.localStorage.removeItem('token');
      window.location.reload();
    }
    return Promise.reject(error);
  },
);
