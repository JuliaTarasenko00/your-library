import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '../../components/ui/Container';
import { useEffect, useMemo, useState } from 'react';
import { routes } from '../../helpers/path';
import { toast } from 'sonner';
import { toastErrorStyle } from '../../components/ui/toastStyle';
import { Book } from '../../types/bookWithReadingProgress';
import { Loader } from '../../components/ui/loader/Loader';
import { Title } from '../../components/ui/Title';
import { ReadingAside } from '../../components/Aside/Reading/ReadingAside';
import { useBookById } from './request/useGetBookById';
import { useStartReadingBook } from './request/useStartReadingBook';
import { useFinishReadingBook } from './request/useFinishReadingBook';
import img from '../../assets/img/image_not_found.jpg';
import { useDeleteReadingTime } from './request/useDeleteReadingTime';
import { NotValidId } from './NotValidId';

export default function ReadingPage() {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const [error, setError] = useState<boolean>(false);
  const { mutate, isPending } = useBookById();
  const { mutate: startReading, isPending: pendingStartReading } =
    useStartReadingBook();
  const { mutate: finishReading, isPending: pendingFinishReading } =
    useFinishReadingBook();
  const { mutate: deleteReadingTime } = useDeleteReadingTime();
  const [book, setBook] = useState<Book | null>(null);
  const image = book?.imageUrl !== null ? book?.imageUrl : img;

  const isActive = book?.progress.some(({ status }) => status === 'active');
  const timeToLeft = useMemo(
    () =>
      book?.timeLeftToRead &&
      Object.values(book.timeLeftToRead).every((el) => el !== null),
    [book],
  );

  useEffect(() => {
    if (!bookId) {
      navigate(routes.main);
      return;
    } else {
      mutate(bookId, {
        onSuccess: (data: Book) => {
          setBook(data);
        },
        onError: (error: any) => {
          if (error?.status === 400) {
            setError(true);
          }
          toast.error(error.response.data.message, {
            style: toastErrorStyle,
          });
        },
      });
    }
  }, [bookId, mutate]);

  const handleStartReading = (id: string, page = 1) => {
    startReading(
      { id, page },
      {
        onSuccess: (data) => setBook(data),
        onError: (error: any) =>
          toast.error(error.response.data.message, {
            style: toastErrorStyle,
          }),
      },
    );
  };

  const handleSubmitForm = ({ page }: { page: number }) => {
    if (!bookId) return;
    finishReading(
      { id: bookId, page },
      {
        onSuccess: (data) => setBook(data),
        onError: (error: any) =>
          toast.error(error.response.data.message, {
            style: toastErrorStyle,
          }),
      },
    );
  };

  const handleDeleteReadingTime = (readingId: string) => {
    if (!bookId) return;

    deleteReadingTime(
      { bookId, readingId },
      {
        onSuccess: (data) => setBook(data),
        onError: (error: any) =>
          toast.error(error.response.data.message, {
            style: toastErrorStyle,
          }),
      },
    );
  };

  return (
    <Container
      childrenSecond={
        <ReadingAside
          book={book}
          bookId={bookId as string}
          isActive={isActive as boolean}
          handleStartReading={handleStartReading}
          handleSubmitForm={handleSubmitForm}
          pendingStartReading={pendingStartReading}
          pendingFinishReading={pendingFinishReading}
          isPending={isPending}
          handleDeleteReadingTime={handleDeleteReadingTime}
          error={error}
        />
      }
    >
      {error && <NotValidId />}
      {isPending && <Loader />}
      {book && !isPending && (
        <>
          <div className="flex flex-wrap items-center justify-between gap-[3px]">
            <Title>My reading</Title>
            {timeToLeft && (
              <p className="text-[10px] text-[#686868] md:text-[14px]">
                {book.timeLeftToRead.hours > 0
                  ? `${book.timeLeftToRead.hours} hours and`
                  : ''}{' '}
                {book.timeLeftToRead.minutes} minutes left
              </p>
            )}
          </div>
          <div className="mg:mt-[40px] mt-[32px] flex flex-col items-center justify-center lg:mt-[44px]">
            <img
              src={image}
              alt={book.title}
              width={137}
              height={208}
              loading="lazy"
              className="mb-[10px] h-[208px] w-[137px] rounded-[8px] md:h-[256px] md:w-[169px] lg:h-[340px] lg:w-[224px]"
            />
            <h3 className="max-w-[170px] text-center text-[14px] font-bold leading-[18px] text-[#F9F9F9] md:max-w-max md:text-[20px] md:leading-[20px]">
              {book.title}
            </h3>
            <p className="mb-[20px] mt-[5px] text-[10px] leading-[12px] text-[#686868] md:mb-[16px] md:text-[14px] md:leading-[18px]">
              {book.author}
            </p>
            <button
              type="button"
              className="flex h-[40px] w-[40px] cursor-none items-center justify-center rounded-[50%] border-[1.5px] border-[#F9F9F9] bg-transparent md:h-[50px] md:w-[50px]"
            >
              <span
                className={`inline-block ${isActive ? 'h-[37%] w-[37%] rounded-[3px]' : 'h-[87%] w-[87%] rounded-[50%]'} transition-custom bg-[#E90516]`}
              ></span>
            </button>
          </div>
        </>
      )}
    </Container>
  );
}
