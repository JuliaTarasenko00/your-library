import { useContext } from 'react';
import { FilterContext, TFilterByAuthorTile } from './filterByAuthorTile';

export const useFilterBook = (): TFilterByAuthorTile => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error('some problems with book filtering');
  }

  return context;
};
