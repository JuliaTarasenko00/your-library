import { useLocation } from 'react-router-dom';
import { Filters } from './Filters/Filters';
import { routes } from '../../helpers/path';
import { CreateLibrary } from './CreateLibrary/CreateLibrary';

export const Aside = () => {
  const { pathname } = useLocation();

  return (
    <aside className="grid gap-[20px] rounded-[30px] bg-[#1F1F1F] px-[20px] py-[20px] md:grid-cols-2 md:gap-[32px] md:py-[32px] lg:grid-cols-1 lg:gap-[20px] lg:py-[40px]">
      {pathname === routes.library ? <CreateLibrary /> : <Filters />}
    </aside>
  );
};
