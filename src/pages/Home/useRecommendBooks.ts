import { useQuery } from '@tanstack/react-query';
import { getRecommendBook } from '../../api/bookApi';
import { recommendBook } from '../../types/recommendBook';
import { useFilterBook } from '../../helpers/context/filterByAuthorTile/useFilterBook';

export const useRecommendBooks = (page: number, limit: number) => {
  const {
    value: { title, author },
  } = useFilterBook();

  const { data, isLoading } = useQuery<recommendBook>({
    queryKey: ['response/recommend_book', page, limit, title, author],
    queryFn: () => getRecommendBook(page, limit, title, author),
    enabled: !!page && !!limit,
  });

  return { data, isLoading };
};
