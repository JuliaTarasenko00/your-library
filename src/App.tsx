import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './helpers/path';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Toaster } from 'sonner';
import { MainLoader } from './components/ui/loader/MainLoader';

const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));

const Layout = lazy(() => import('./components/Layout/Layout'));
const Home = lazy(() => import('./pages/Home/Home'));
const Library = lazy(() => import('./pages/Library/Library'));
const Reading = lazy(() => import('./pages/Reading/Reading'));

function App() {
  return (
    <>
      <Suspense fallback={<MainLoader />}>
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
            <Route path={routes.reading} element={<Reading />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
