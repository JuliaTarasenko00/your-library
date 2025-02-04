import { BookWithProgress } from '../types/libraryTypes';
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
  const { data } = await $instants.post<BookWithProgress[]>(
    `${path}/add/${id}`,
  );

  return data;
};

export const getMyLibrary = async () => {
  const { data } = await $instants.get<BookWithProgress[]>(`${path}/own`);

  return data;
};
