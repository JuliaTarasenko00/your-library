import { Auth } from '../../../types/auth';
import { FC } from 'react';
import { NavigateMenu } from './NavigateMenu';
import { LogOutButton } from './LogOutButton';

interface TabletMenuProps {
  data: Auth | undefined;
}

export const TabletMenu: FC<TabletMenuProps> = ({ data }) => {
  return (
    <>
      <ul className="hidden items-center gap-[32px] md:flex lg:gap-[40px]">
        <NavigateMenu />
      </ul>
      <div className="hidden items-center md:flex md:gap-[16px] lg:gap-[8px]">
        <p className="rounded-[20px] border-[1px] border-[#F9F9F933] bg-[#262626] px-[15px] py-[8px] text-[16px] font-bold text-[#F9F9F9]">
          {data?.name[0]}
        </p>
        <p className="hidden text-[16px] font-bold text-[#F9F9F9] lg:block">
          {data?.name}
        </p>
        <LogOutButton />
      </div>
    </>
  );
};
