import { useEffect, useState } from 'react';
import { BooksMarkup } from '../../components/BooksMarkup/BooksMarkup';
import { useRecommendBooks } from './useRecommendBooks';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Loader } from '../../components/ui/loader/Loader';
import { Container } from '../../components/ui/Container';
import { Filters } from '../../components/Aside/Filters/Filters';
import { Title } from '../../components/ui/Title';

const styleButtons =
  'flex md:h-[40px] md:w-[40px] w-[32px] h-[32px] items-center justify-center rounded-[30px] border-[1px] border-[#F9F9F933] text-[#F9F9F9] disabled:text-[#F9F9F933]';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(2);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const { data, isLoading } = useRecommendBooks(currentPage, limit);

  const nextPage = () => {
    if (data?.totalPages === currentPage) {
      return;
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage === 1) {
      return;
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (width >= 1280) {
      setLimit(10);
      return;
    } else if (width >= 768) {
      setLimit(8);
      return;
    } else {
      setLimit(2);
      return;
    }
  }, [width]);

  return (
    <Container
      childrenSecond={
        <Filters setCurrentPage={setCurrentPage} currentPage={currentPage} />
      }
    >
      <div className="mb-[20px] flex items-center justify-between">
        <Title>Recommended</Title>
        <div className="flex items-center justify-end gap-[8px]">
          <button
            type="button"
            onClick={prevPage}
            disabled={currentPage === 1}
            className={styleButtons}
          >
            <IoIosArrowBack className="h-[20px] w-[20px]" />
          </button>
          <button
            type="button"
            onClick={nextPage}
            disabled={data?.totalPages === currentPage}
            className={styleButtons}
          >
            <IoIosArrowForward className="h-[20px] w-[20px]" />
          </button>
        </div>
      </div>
      {isLoading ? <Loader /> : <BooksMarkup data={data} />}
    </Container>
  );
}
