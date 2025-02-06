type TRoutes = {
  login: string;
  register: string;
  main: string;
  library: string;
  reading: string;
};

export const routes: TRoutes = {
  login: '/login',
  register: '/register',
  main: '/',
  library: 'library',
  reading: 'reading/:bookId',
};
