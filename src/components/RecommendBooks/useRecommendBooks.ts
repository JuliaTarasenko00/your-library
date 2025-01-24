import { useQuery } from '@tanstack/react-query';
import { getRecommendBook } from '../../api/bookApi';
import { recommendBook } from '../../types/recommendBook';

export const useRecommendBooks = (page: number) => {
  const { data, isLoading } = useQuery<recommendBook>({
    queryKey: ['response/recommend_book', page],
    queryFn: () => getRecommendBook(page),
  });

  return { data, isLoading };
};
