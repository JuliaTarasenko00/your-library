import { ReactNode } from 'react';

export const Aside = ({ children }: { children: ReactNode }) => {
  return (
    <aside className="flex max-h-max flex-col items-start gap-[20px] rounded-[30px] bg-[#1F1F1F] px-[20px] py-[20px] md:grid md:grid-cols-2 md:gap-[32px] md:py-[32px] lg:flex lg:gap-[20px] lg:py-[40px]">
      {children}
    </aside>
  );
};
