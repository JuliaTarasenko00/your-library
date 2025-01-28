import { FC } from 'react';
import { resultRecommendBook } from '../../types/recommendBook';
import { Modal } from '../ui/modal/Modal';

interface BookDetailsProps {
  book: resultRecommendBook;
  closeModal: () => void;
  isOpen: boolean;
}

export const BookDetails: FC<BookDetailsProps> = ({
  book,
  closeModal,
  isOpen,
}) => {
  return (
    <Modal closeModal={closeModal} isOpen={isOpen}>
      {book !== null && (
        <div className="flex max-w-[450px] flex-col items-center justify-center">
          <img
            src={book.imageUrl}
            alt={book.title}
            width={153}
            height={233}
            className="mb-[16px] h-[213px] w-[140px] rounded-[8px] md:h-[233px] md:w-[153px]"
          />
          <p className="mb-[2px] text-[18px] font-bold leading-[18px] text-[#F9F9F9] md:text-[20px] md:leading-[20px]">
            {book.title}
          </p>
          <p className="mb-[4px] text-[12px] font-normal leading-[14px] text-[#686868] md:text-[14px] md:leading-[18px]">
            {book.author}
          </p>
          <p className="mb-[20px] text-[10px] leading-[12px] text-[#F9F9F9] md:mb-[32px]">
            {book.totalPages}
          </p>
          <button
            type="button"
            className="rounded-[30px] border-[1px] border-[#F9F9F933] px-[24px] py-[12px] text-[14px] font-bold leading-[18px] text-[#F9F9F9] md:px-[28px] md:py-[14px] md:text-[16px]"
          >
            Start reading
          </button>
        </div>
      )}
    </Modal>
  );
};
