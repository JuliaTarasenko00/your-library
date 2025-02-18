import { useMutation } from '@tanstack/react-query';
import { filterMyLibrary } from '../../../api/bookApi';

export const useFilterLibrary = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['filter/filter-my-library'],
    mutationFn: (type: string) => filterMyLibrary(type),
  });

  return { mutate, isPending };
};
