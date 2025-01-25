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
  console.log('book: ', book);
  return (
    <Modal closeModal={closeModal} isOpen={isOpen}>
      {book !== null && (
        <div className="flex max-w-[450px] flex-col items-center justify-center">
          <img
            src={book.imageUrl}
            alt={book.title}
            width={153}
            height={233}
            className="mb-[16px] h-[233px] rounded-[8px]"
          />
          <p className="mb-[2px] text-[20px] font-bold leading-[20px] text-[#F9F9F9]">
            {book.title}
          </p>
          <p className="mb-[4px] text-[14px] font-normal leading-[18px] text-[#686868]">
            {book.author}
          </p>
          <p className="mb-[32px] text-[10px] leading-[12px] text-[#F9F9F9]">
            {book.totalPages}
          </p>
          <button
            type="button"
            className="rounded-[30px] border-[1px] border-[#F9F9F933] px-[28px] py-[14px] text-[16px] font-bold leading-[18px] text-[#F9F9F9]"
          >
            Start reading
          </button>
        </div>
      )}
    </Modal>
  );
};
