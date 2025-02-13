import { useMutation } from '@tanstack/react-query';
import { finishReadingBook } from '../../../api/bookApi';

export const useFinishReadingBook = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['request/finish-reading-book'],
    mutationFn: ({ id, page }: { id: string; page: number }) =>
      finishReadingBook(id, page),
  });

  return { mutate, isPending };
};
