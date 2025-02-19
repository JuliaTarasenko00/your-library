import { useEffect, useState, MouseEvent } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { CreateLibrary } from '../../components/Aside/CreateLibrary/CreateLibrary';
import { BooksMarkup } from '../../components/BooksMarkup/BooksMarkup';
import { useRemoveBookFromLibrary } from '../../components/BooksMarkup/useRemoveBookFromLibrary';
import { Container } from '../../components/ui/Container';
import { Title } from '../../components/ui/Title';
import { NoContent } from './NoContent';
import { useGetLibrary } from './request/useGetLibrary';
import { useFilterLibrary } from './request/useFilterLibrary';
import { ReadingStatusSelector } from '../../components/ui/selector/ReadingStatusSelector';
import { Loader } from '../../components/ui/loader/Loader';
import { toastErrorStyle } from '../../components/ui/toastStyle';
import {
  BookWithProgress,
  DeleteBookResponse,
  ReadingStatus,
} from '../../types/libraryTypes';

export type OptionType = {
  type: ReadingStatus | '';
  option: string;
};

const options: OptionType[] = [
  { type: 'unread', option: 'Unread' },
  { type: 'in-progress', option: 'In progress' },
  { type: 'done', option: 'Done' },
  { type: '', option: 'All books' },
];

export default function Library() {
  const queryClient = useQueryClient();
  const { data: libraryData, isLoading } = useGetLibrary();
  console.log('libraryData: ', libraryData);
  const { mutate: removeBook, isPending: isRemoving } =
    useRemoveBookFromLibrary();
  const { mutate: filterLibrary, isPending: isFiltering } = useFilterLibrary();

  const [selectedOption, setSelectedOption] = useState<string>(
    options[options.length - 1].option,
  );
  const [bookList, setBookList] = useState<BookWithProgress[]>([]);
  console.log('bookList: ', bookList);

  useEffect(() => {
    if (libraryData) setBookList(libraryData);
  }, [libraryData]);

  const isLoaderVisible = isLoading || isRemoving || isFiltering;

  const handleDeleteBook = (
    event: MouseEvent<HTMLButtonElement>,
    id: string,
  ) => {
    event.stopPropagation();

    removeBook(id, {
      onSuccess: ({ id: removedId }: DeleteBookResponse) => {
        setBookList((prevList) =>
          prevList.filter(({ _id }) => _id !== removedId),
        );
      },
      onError: (error: any) => {
        toast.error(error.response?.data?.message || 'Failed to remove book', {
          style: toastErrorStyle,
        });
      },
    });
  };

  const handleFilterChange = async (type: string, option: string) => {
    setSelectedOption(option);

    if (type === '') {
      await queryClient.invalidateQueries({ queryKey: ['fetch/get_library'] });
      if (libraryData) setBookList(libraryData);
      return;
    }

    filterLibrary(type, {
      onSuccess: (filteredData: BookWithProgress[]) =>
        setBookList(filteredData),
      onError: (error: any) => {
        toast.error(error.response?.data?.message || 'Failed to filter books', {
          style: toastErrorStyle,
        });
      },
    });
  };

  return (
    <Container childrenSecond={<CreateLibrary />}>
      <div className="mb-7 flex items-center justify-between">
        <Title>My Library</Title>
        <ReadingStatusSelector
          options={options}
          currentOption={selectedOption}
          handleChangeCurrentOption={handleFilterChange}
        />
      </div>
      {isLoaderVisible ? (
        <Loader />
      ) : bookList.length ? (
        <BooksMarkup
          data={bookList}
          onDeleteBookFromLibrary={handleDeleteBook}
        />
      ) : (
        <NoContent />
      )}
    </Container>
  );
}
