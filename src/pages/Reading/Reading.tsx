import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '../../components/ui/Container';
import { useEffect, useState } from 'react';
import { routes } from '../../helpers/path';
import { useBookById } from './useGetBookById';
import { toast } from 'sonner';
import { toastErrorStyle } from '../../components/ui/toastStyle';
import { Book } from '../../types/bookWithReadingProgress';
import { Loader } from '../../components/ui/loader/Loader';
import { Title } from '../../components/ui/Title';
import { ReadingAside } from '../../components/Aside/Reading/ReadingAside';
import { useReadingControl } from '../../helpers/context/readingPageProgress/useReadingControl';

export default function ReadingPage() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { mutate, isPending } = useBookById();
  const [book, setBook] = useState<Book | null>(null);
  const { isReading } = useReadingControl();

  useEffect(() => {
    if (!bookId) {
      navigate(routes.main);
    } else {
      mutate(bookId, {
        onSuccess: (data: Book) => {
          setBook(data);
        },
        onError: (error) => {
          toast.error(error.message, {
            style: toastErrorStyle,
          });
        },
      });
    }
  }, [bookId, mutate]);

  return (
    <Container
      childrenSecond={
        <ReadingAside bookProgress={book?.progress} bookId={bookId as string} />
      }
    >
      {isPending && <Loader />}
      {book && !isPending && (
        <>
          <div className="flex flex-wrap items-center justify-between gap-[3px]">
            <Title>My reading</Title>
            {book.timeLeftToRead !== undefined && (
              <p className="text-[10px] text-[#686868] md:text-[14px]">
                {book.timeLeftToRead.hours > 0
                  ? `${book.timeLeftToRead.hours} hours and`
                  : ''}{' '}
                {book.timeLeftToRead.minutes} minutes left
              </p>
            )}
          </div>
          <div className="mg:mt-[40px] mt-[32px] place-items-center lg:mt-[44px]">
            <img
              src={book.imageUrl}
              alt={book.title}
              width={137}
              height={208}
              loading="lazy"
              className="mb-[10px] h-[208px] w-[137px] rounded-[8px] md:h-[256px] md:w-[169px] lg:h-[340px] lg:w-[224px]"
            />
            <h3 className="md:text[20px] max-w-[170px] text-center text-[14px] font-bold leading-[18px] text-[#F9F9F9] md:max-w-max md:leading-[20px]">
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
                className={`inline-block ${isReading ? 'h-[37%] w-[37%] rounded-[3px]' : 'h-[87%] w-[87%] rounded-[50%]'} transition-custom bg-[#E90516]`}
              ></span>
            </button>
          </div>
        </>
      )}
    </Container>
  );
}
