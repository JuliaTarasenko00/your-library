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

export const filterMyLibrary = async (type: any) => {
  const { data } = await $instants.get<BookWithProgress[]>(
    `${path}/own?status=${type}`,
  );

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

export const startReadingBook = async (id: string, page: number) => {
  const { data } = await $instants.post<Book>(`${path}/reading/start`, {
    id,
    page,
  });

  return data;
};

export const finishReadingBook = async (id: string, page: number) => {
  const { data } = await $instants.post<Book>(`${path}/reading/finish`, {
    id,
    page,
  });

  return data;
};

export const removeReadingTime = async (bookId: string, readingId: string) => {
  const { data } = await $instants.delete<Book>(
    `${path}/reading?bookId=${bookId}&readingId=${readingId}`,
  );

  return data;
};
