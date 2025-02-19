import { useQuery } from '@tanstack/react-query';
import { getRecommendBookByLibrary } from '../../../api/bookApi';

export const useGetBooks = (limit: number, page: number) => {
  const { data } = useQuery({
    queryKey: ['get/books-by-my-library'],
    queryFn: () => getRecommendBookByLibrary(limit, page),
  });

  return { data };
};
