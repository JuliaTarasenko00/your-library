import { useLocation } from 'react-router-dom';
import { Filters } from './Filters/Filters';
import { routes } from '../../helpers/path';
import { CreateLibrary } from './CreateLibrary/CreateLibrary';

export const Aside = () => {
  const { pathname } = useLocation();

  return (
    <aside className="rounded-[30px] bg-[#1F1F1F] p-[20px]">
      {pathname === routes.library ? <CreateLibrary /> : <Filters />}
    </aside>
  );
};
