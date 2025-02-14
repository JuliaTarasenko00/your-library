import axios from 'axios';

export const $instants = axios.create({
  baseURL: 'https://readjourney.b.goit.study/api',
});

$instants.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

$instants.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response.data.message === 'Unauthorized' &&
      error.response?.status === 401
    ) {
      window.localStorage.removeItem('token');
      window.location.href = '/your-library/login';
    }
    return Promise.reject(error);
  },
);
