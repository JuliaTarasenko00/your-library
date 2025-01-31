import { ReactNode } from 'react';

export const Title = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="text-[20px] font-bold leading-[32px] text-[#F9F9F9] md:text-[28px]">
      {children}
    </h2>
  );
};
