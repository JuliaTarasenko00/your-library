import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { LogOutButton } from './LogOutButton';
import { NavigateMenu } from './NavigateMenu';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const hidden = 'invisible opacity-0 pointer-events-none';
const visible = 'visible opacity-[1] pointer-events-auto';

export const MobileMenu = ({ name }: { name: string }) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  return (
    <>
      <div className="flex items-center gap-[10px] md:hidden">
        <p className="flex h-[35px] w-[35px] items-center justify-center rounded-[20px] border-[1px] border-[#F9F9F933] bg-[#262626] text-[16px] font-bold text-[#F9F9F9]">
          {name[0]}
        </p>
        <button
          type="button"
          className="w-[21px]"
          onClick={() => setIsHidden(!isHidden)}
        >
          <HiOutlineMenuAlt3 />
        </button>
      </div>
      <div
        className={` ${isHidden ? hidden : visible} transition-custom fixed right-0 top-0 z-[60] flex h-full w-[60%] max-w-[300px] flex-col items-center justify-center bg-[#262626] px-[55px] py-[40px] md:hidden`}
      >
        <ul className="flex flex-col items-start gap-[20px]">
          <NavigateMenu />
        </ul>
        <div className="absolute bottom-[40px]">
          <LogOutButton />
        </div>
        <button
          type="button"
          className="absolute right-[40px] top-[34px] h-[28px] w-[28px]"
          onClick={() => setIsHidden(!isHidden)}
        >
          <IoMdClose />
        </button>
      </div>
    </>
  );
};
