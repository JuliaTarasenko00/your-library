export type recommendBook = {
  results: Array<resultRecommendBook>;
  totalPages: number;
  page: number;
  perPage: number;
};

export type resultRecommendBook = {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPage: number;
  recommend: boolean;
};
