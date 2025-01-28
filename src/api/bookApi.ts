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
