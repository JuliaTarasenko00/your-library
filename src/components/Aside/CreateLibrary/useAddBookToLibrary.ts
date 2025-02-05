import { useMutation } from '@tanstack/react-query';
import { AddBookToLibrary } from '../../../types/libraryTypes';
import { addBookToLibrary } from '../../../api/bookApi';

export const useAddBookToLibrary = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['add/book_to_library'],

    mutationFn: (book: AddBookToLibrary) => addBookToLibrary(book),
  });

  return { mutate, isPending };
};
