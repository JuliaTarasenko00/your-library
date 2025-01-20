import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { routes } from '../../helpers/path';
import { useUserInformation } from '../../helpers/context/userInformation/useUserInformation';

export default function Layout() {
  const { data } = useUserInformation();

  return (
    <>
      <header className="container pb-[16px] pt-[32px]">
        <div className="flex items-center justify-between rounded-[15px] bg-[#1F1F1F] p-[16px]">
          <div className="flex items-center gap-[4px]">
            <img src={logo} alt="logo" />
            <h2 className="uppercase">read journey</h2>
          </div>
          <ul className="flex items-center gap-[40px]">
            <li>
              <NavLink
                to={routes.main}
                className={({ isActive }) =>
                  `${isActive ? 'border-b-[3px] border-b-[#4F92F7] pb-[8px] text-[#F9F9F9]' : 'text-[#686868]'} `
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={routes.library}
                className={({ isActive }) =>
                  `${isActive ? 'border-b-[3px] border-b-[#4F92F7] pb-[8px] text-[#F9F9F9]' : 'text-[#686868]'}`
                }
              >
                My library
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center gap-[8px]">
              <p className="rounded-[20px] border-[1px] border-[#F9F9F933] bg-[#262626] px-[15px] py-[8px] text-[16px] font-bold text-[#F9F9F9]">
                {data?.name[0]}
              </p>
              <p className="text-[16px] font-bold text-[#F9F9F9]">
                {data?.name}
              </p>
            </div>
            <button
              type="button"
              className="rounded-[30px] border-[1px] border-[#F9F9F933] px-[28px] py-[12px] text-[16px] font-bold text-[#F9F9F9]"
            >
              Log out
            </button>
          </div>
        </div>
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
