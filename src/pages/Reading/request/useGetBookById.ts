import { useMutation } from '@tanstack/react-query';
import { getBookById } from '../../../api/bookApi';

export const useBookById = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['request/book_by_id'],
    mutationFn: (id: string) => getBookById(id),
  });

  return { mutate, isPending };
};
