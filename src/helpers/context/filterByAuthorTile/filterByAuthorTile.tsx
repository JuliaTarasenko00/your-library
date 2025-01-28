import { createContext, Dispatch, SetStateAction, useState } from 'react';

type ValueType = {
  title: string;
  author: string;
};

export type TFilterByAuthorTile = {
  value: ValueType;
  setValue: Dispatch<SetStateAction<ValueType>>;
};

export const FilterContext = createContext<TFilterByAuthorTile | undefined>(
  undefined,
);

export const FilterByAuthorTileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [value, setValue] = useState<ValueType>({
    title: '',
    author: '',
  });

  return (
    <FilterContext.Provider value={{ value, setValue }}>
      {children}
    </FilterContext.Provider>
  );
};
