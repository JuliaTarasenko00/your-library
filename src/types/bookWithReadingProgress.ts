type ReadingProgress = {
  startPage: number;
  startReading: string;
  finishPage: number;
  finishReading: string;
  speed: number;
  status: 'inactive' | 'active';
};

type TimeLeftToRead = {
  hours: number;
  minutes: number;
  seconds: number;
};

export type Book = {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  status: string;
  owner: string;
  progress: ReadingProgress[];
  timeLeftToRead: TimeLeftToRead;
};
