import { NavLink, useLocation } from 'react-router-dom';
import { routes } from '../../../helpers/path';

export const NavigateMenu = () => {
  const { pathname } = useLocation();

  return (
    <>
      <li>
        <NavLink
          to={routes.main}
          className={`${pathname === routes.main ? 'text-[#F9F9F9]' : 'text-[#686868]'} transition-custom flex flex-col items-center text-[14px] font-normal md:text-[16px]`}
        >
          Home
          {pathname === routes.main && (
            <div className="h-[3px] w-[105%] rounded-[8px] border-transparent bg-[#4F92F7]"></div>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.library}
          className={`${pathname.slice(1, pathname.length) === routes.library ? 'text-[#F9F9F9]' : 'text-[#686868]'} transition-custom flex flex-col items-center text-[14px] font-normal md:text-[16px]`}
        >
          My library
          {pathname.slice(1, pathname.length) === routes.library && (
            <div className="h-[3px] w-[105%] rounded-[8px] border-transparent bg-[#4F92F7]"></div>
          )}
        </NavLink>
      </li>
    </>
  );
};
