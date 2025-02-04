import { useQuery } from '@tanstack/react-query';
import { getMyLibrary } from '../../api/bookApi';
import { BookWithProgress } from '../../types/libraryTypes';

export const useGetLibrary = () => {
  const { data, isLoading } = useQuery<BookWithProgress[]>({
    queryKey: ['fetch/get_library'],
    queryFn: getMyLibrary,
  });

  return { data, isLoading };
};
