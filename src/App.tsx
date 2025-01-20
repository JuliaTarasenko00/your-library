import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './helpers/path';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));

const Layout = lazy(() => import('./components/Layout/Layout'));
const Home = lazy(() => import('./pages/Home/Home'));
const Library = lazy(() => import('./pages/Library/Library'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.register} element={<Register />} />
        <Route
          path={routes.main}
          element={
            <PrivateRoute redirectTo={routes.login}>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path={routes.library} element={<Library />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
