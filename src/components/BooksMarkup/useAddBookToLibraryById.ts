import { useMutation } from '@tanstack/react-query';
import { addBookToLibraryById } from '../../api/bookApi';

export const useAddBookToLibraryById = () => {
  const { mutate } = useMutation({
    mutationKey: ['add/book_to_library_by_id'],
    mutationFn: (id: string) => addBookToLibraryById(id),
  });

  return { mutate };
};
