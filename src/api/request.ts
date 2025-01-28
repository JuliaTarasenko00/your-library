import axios from 'axios';

export const $instants = axios.create({
  baseURL: 'https://readjourney.b.goit.study/api',
});

$instants.interceptors.request.use(function (config) {
  const token = window.localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

$instants.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await $instants.get('/users/current/refresh', {
          params: { refreshToken },
        });
        const { token: accessToken, refreshToken: newRefreshToken } =
          response.data;
        localStorage.setItem('token', accessToken);
        localStorage.setItem('refreshToken', newRefreshToken);
        $instants.defaults.headers.common['Authorization'] =
          `Bearer ${accessToken}`;
        return $instants(originalRequest);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        localStorage.setItem('token', '');
        localStorage.setItem('refreshToken', '');
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);
