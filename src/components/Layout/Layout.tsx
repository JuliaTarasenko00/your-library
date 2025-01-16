import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header></header>
      <main>
        <p>Main Content</p>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
