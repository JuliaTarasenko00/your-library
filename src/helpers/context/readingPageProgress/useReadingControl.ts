import { useContext } from 'react';
import {
  ReadingProgressContext,
  TReadingProgress,
} from './ReadingPageProgress';

export const useReadingControl = (): TReadingProgress => {
  const context = useContext(ReadingProgressContext);

  if (!context) {
    throw new Error('some problems with book page');
  }

  return context;
};
