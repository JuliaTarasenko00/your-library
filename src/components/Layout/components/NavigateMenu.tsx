import { NavLink } from 'react-router-dom';
import { routes } from '../../../helpers/path';
import { useState } from 'react';

export const NavigateMenu = () => {
  const [isActive, setIsActive] = useState<'home' | 'library'>('home');

  return (
    <>
      <li>
        <NavLink
          to={routes.main}
          onClick={() => setIsActive('home')}
          className={`${isActive === 'home' ? 'text-[#F9F9F9]' : 'text-[#686868]'} transition-custom flex flex-col items-center text-[14px] font-normal md:text-[16px]`}
        >
          Home
          {isActive === 'home' && (
            <div className="h-[3px] w-[105%] rounded-[8px] border-transparent bg-[#4F92F7]"></div>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.library}
          onClick={() => setIsActive('library')}
          className={`${isActive === 'library' ? 'text-[#F9F9F9]' : 'text-[#686868]'} transition-custom flex flex-col items-center text-[14px] font-normal md:text-[16px]`}
        >
          My library
          {isActive === 'library' && (
            <div className="h-[3px] w-[105%] rounded-[8px] border-transparent bg-[#4F92F7]"></div>
          )}
        </NavLink>
      </li>
    </>
  );
};
