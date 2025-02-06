import { Book } from '../types/bookWithReadingProgress';
import {
  AddBookToLibrary,
  BookWithProgress,
  DeleteBookResponse,
} from '../types/libraryTypes';
import { recommendBook } from '../types/recommendBook';
import { $instants } from './request';

const path = '/books';

export const getRecommendBook = async (
  page = 1,
  limit = 10,
  title = '',
  author = '',
) => {
  const { data } = await $instants.get<recommendBook>(
    `${path}/recommend?page=${page}&limit=${limit}&title=${title}&author=${author}`,
  );

  return data;
};

export const addBookToLibraryById = async (id: string) => {
  const { data } = await $instants.post<BookWithProgress>(`${path}/add/${id}`);

  return data;
};

export const getMyLibrary = async () => {
  const { data } = await $instants.get<BookWithProgress[]>(`${path}/own`);

  return data;
};

export const removeBookFromLibrary = async (id: string) => {
  const { data } = await $instants.delete<DeleteBookResponse>(
    `${path}/remove/${id}`,
  );

  return data;
};

export const addBookToLibrary = async (book: AddBookToLibrary) => {
  const { data } = await $instants.post<BookWithProgress>(`${path}/add`, book);

  return data;
};

export const getBookById = async (id: string) => {
  const { data } = await $instants.get<Book>(`${path}/${id}`);

  return data;
};
