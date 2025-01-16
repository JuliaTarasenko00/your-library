import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './helpers/path';

const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));

const Layout = lazy(() => import('./components/Layout/Layout'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.main} element={<Layout />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
