export type AddBookToLibrary = {
  title: string;
  author: string;
  totalPages: number;
};

export type ReadingStatus = 'in-progress' | 'unread' | 'done';

export type ProgressEntry = {
  startPage: number;
  startReading: string;
  finishPage: number;
  finishReading: string;
  speed: number;
  status: string;
};

export type BookWithProgress = {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  status: ReadingStatus;
  owner: string;
  progress: ProgressEntry[];
};

export type DeleteBookResponse = {
  message: string;
  id: string;
};
