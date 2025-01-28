import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { useUserInformation } from '../../helpers/context/userInformation/useUserInformation';
import { Aside } from '../Aside/Aside';
import { MainLoader } from '../ui/loader/MainLoader';
import { TabletMenu } from './components/TabletMenu';
import { MobileMenu } from './components/MobileMenu';

export default function Layout() {
  const { data } = useUserInformation();

  return (
    <>
      <header className="container-custom relative pb-[10px] pt-[20px] md:pb-[16px] md:pt-[32px]">
        <div className="flex items-center justify-between rounded-[15px] bg-[#1F1F1F] px-[20px] py-[11px] md:p-[16px]">
          <div className="flex items-center gap-[4px]">
            <img src={logo} alt="logo" />
            <h2 className="hidden uppercase lg:block">read journey</h2>
          </div>
          <MobileMenu name={data?.name as string} />
          <TabletMenu data={data} />
        </div>
      </header>
      <div className="container-custom grid gap-[16px] pb-[27px] lg:grid-cols-[1fr_2.6fr]">
        <Aside />
        <main className="min-h-[398px] rounded-[30px] bg-[#1F1F1F] px-[20px] py-[40px] md:min-h-[681px] md:p-[40px] lg:min-h-full">
          <Suspense fallback={<MainLoader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  );
}
