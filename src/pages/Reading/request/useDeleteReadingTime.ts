import { useMutation } from '@tanstack/react-query';
import { removeReadingTime } from '../../../api/bookApi';

type TArg = {
  bookId: string;
  readingId: string;
};

export const useDeleteReadingTime = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['delete/reading-time'],
    mutationFn: ({ bookId, readingId }: TArg) =>
      removeReadingTime(bookId, readingId),
  });

  return { mutate, isPending };
};
