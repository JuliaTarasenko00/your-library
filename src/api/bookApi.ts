import { recommendBook } from '../types/recommendBook';
import { $instants } from './request';

const path = '/books';

export const getRecommendBook = async (page = 1) => {
  const { data } = await $instants.get<recommendBook>(
    `${path}/recommend?page=${page}`,
  );

  return data;
};
