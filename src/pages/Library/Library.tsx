import { toast } from 'sonner';
import { CreateLibrary } from '../../components/Aside/CreateLibrary/CreateLibrary';
import { BooksMarkup } from '../../components/BooksMarkup/BooksMarkup';
import { useRemoveBookFromLibrary } from '../../components/BooksMarkup/useRemoveBookFromLibrary';
import { Container } from '../../components/ui/Container';
import { Title } from '../../components/ui/Title';
import { BookWithProgress, DeleteBookResponse } from '../../types/libraryTypes';
import { NoContent } from './NoContent';
import { useGetLibrary } from './useGetLibrary';
import { toastErrorStyle } from '../../components/ui/toastStyle';
import { useEffect, useState } from 'react';
import { Loader } from '../../components/ui/loader/Loader';
import { ReadingStatusSelector } from '../../components/ui/selector/ReadingStatusSelector';

const options: Array<string> = ['Unread', 'In progress', 'Done', 'All books'];

export default function Library() {
  const [option, setOption] = useState<string>(options[options.length - 1]);
  const { data, isLoading } = useGetLibrary();
  const { mutate, isPending } = useRemoveBookFromLibrary();
  const [list, setList] = useState<BookWithProgress[] | []>([]);
  const isLoader = isLoading || isPending;

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  const onDeleteBookFromLibrary = (
    ev: React.MouseEvent<HTMLButtonElement>,
    id: string,
  ) => {
    ev.stopPropagation();

    mutate(id, {
      onSuccess: (book: DeleteBookResponse) => {
        const newBookList = data?.filter(({ _id }) => book.id !== _id);
        setList(newBookList as BookWithProgress[]);
      },
      onError: (error: Error) => {
        toast.error(error.message, {
          style: toastErrorStyle,
        });
      },
    });
  };

  return (
    <Container childrenSecond={<CreateLibrary />}>
      <div className="mb-[28px] flex items-center justify-between">
        <Title>My library</Title>
        <ReadingStatusSelector
          options={options}
          option={option}
          setOption={setOption}
        />
      </div>
      {isLoader && <Loader />}
      {!isLoader && (
        <BooksMarkup
          data={list}
          onDeleteBookFromLibrary={onDeleteBookFromLibrary}
        />
      )}
      {!list.length && <NoContent />}
    </Container>
  );
}
