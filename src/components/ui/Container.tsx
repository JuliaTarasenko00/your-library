import { ReactNode } from 'react';
import { Aside } from '../Aside/Aside';

export const Container = ({
  children,
  childrenSecond,
}: {
  children: ReactNode;
  childrenSecond: ReactNode;
}) => {
  return (
    <div className="container-custom grid gap-[16px] pb-[27px] lg:grid-cols-[1fr_2.6fr]">
      <Aside>{childrenSecond}</Aside>
      <section className="min-h-max rounded-[30px] bg-[#1F1F1F] px-[20px] py-[40px] md:p-[40px]">
        {children}
      </section>
    </div>
  );
};
