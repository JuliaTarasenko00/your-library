import { useMutation } from '@tanstack/react-query';
import { removeBookFromLibrary } from '../../api/bookApi';

export const useRemoveBookFromLibrary = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['remove/book-from-library'],
    mutationFn: (id: string) => removeBookFromLibrary(id),
  });

  return { mutate, isPending };
};
