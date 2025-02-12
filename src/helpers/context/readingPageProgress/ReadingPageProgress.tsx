import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

export type TReadingProgress = {
  isReading: boolean;
  setIsReading: Dispatch<SetStateAction<boolean>>;
  bookId: string;
  setBookId: Dispatch<SetStateAction<string>>;
};

export const ReadingProgressContext = createContext<
  TReadingProgress | undefined
>(undefined);

const KEY = 'is-reading';
const KEYBOOK = 'book-id';

export const ReadingPageProgressProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isReading, setIsReading] = useState<boolean>(
    () => JSON.parse(window.sessionStorage.getItem(KEY) as string) ?? false,
  );
  const [bookId, setBookId] = useState(
    () => window.sessionStorage.getItem(KEYBOOK) ?? '',
  );

  useEffect(() => {
    window.sessionStorage.setItem(KEY, JSON.stringify(isReading));
    window.sessionStorage.setItem(KEYBOOK, bookId);
  }, [isReading]);

  return (
    <ReadingProgressContext.Provider
      value={{ isReading, setIsReading, bookId, setBookId }}
    >
      {children}
    </ReadingProgressContext.Provider>
  );
};
