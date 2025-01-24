import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useRecommendBooks } from './useRecommendBooks';
import { Loader } from '../ui/loader/Loader';
import { resultRecommendBook } from '../../types/recommendBook';
import { BookDetails } from './BookDetails';
import { useToggleModal } from '../../helpers/useToggleModal';

export const RecommendBooks = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isLoading } = useRecommendBooks(currentPage);
  const [bookDetails, setBookDetails] = useState<resultRecommendBook | null>(
    null,
  );
  const { open, onToggleModal } = useToggleModal();

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

  const onDetailsBook = (id: string) => {
    const book = data?.results.find(({ _id }) => _id === id);
    setBookDetails(book as resultRecommendBook);
    onToggleModal();
  };

  return (
    <>
      <section className="h-full w-full">
        <div className="mb-[20px] flex items-center justify-between">
          <h2 className="text-[28px] font-bold leading-[32px] text-[#F9F9F9]">
            Recommended
          </h2>
          <div className="flex items-center justify-end gap-[8px]">
            <button
              type="button"
              onClick={prevPage}
              disabled={currentPage === 1}
              className="flex items-center justify-center rounded-[30px] border-[1px] border-[#F9F9F933] px-[15px] py-[15px] text-[#F9F9F9] disabled:text-[#F9F9F933]"
            >
              <IoIosArrowBack className="h-[20px] w-[20px]" />
            </button>
            <button
              type="button"
              onClick={nextPage}
              disabled={data?.totalPages === currentPage}
              className="flex items-center justify-center rounded-[30px] border-[1px] border-[#F9F9F933] px-[15px] py-[15px] text-[#F9F9F9] disabled:text-[#F9F9F933]"
            >
              <IoIosArrowForward className="h-[20px] w-[20px]" />
            </button>
          </div>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="flex flex-wrap justify-center gap-x-[20px] gap-y-[27px]">
            {data?.results.map(({ _id, imageUrl, title, author }) => {
              const newTitle = `${title.slice(0, 22)}${title.length >= 22 ? '...' : ''}`;
              return (
                <li
                  key={_id}
                  className="flex w-[137px] flex-col"
                  onClick={() => onDetailsBook(_id)}
                >
                  <img
                    src={imageUrl}
                    alt={title}
                    width={137}
                    height={208}
                    loading="lazy"
                    className="h-[208px] rounded-[8px]"
                  />
                  <div className="flex-grow-[1]">
                    <h2 className="mb-[2px] mt-[8px] text-[14px] font-bold leading-[18px] text-[#F9F9F9]">
                      {newTitle}
                    </h2>
                    <h4 className="text-[10px] font-normal leading-[12px] text-[#686868]">
                      {author}
                    </h4>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
      {bookDetails && open && (
        <BookDetails book={bookDetails} closeModal={onToggleModal} />
      )}
    </>
  );
};
