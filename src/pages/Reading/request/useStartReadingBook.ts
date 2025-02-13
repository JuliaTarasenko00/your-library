import { useMutation } from '@tanstack/react-query';
import { startReadingBook } from '../../../api/bookApi';

export const useStartReadingBook = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['request/start-reading-book'],
    mutationFn: ({ id, page }: { id: string; page: number }) =>
      startReadingBook(id, page),
  });

  return { mutate, isPending };
};
