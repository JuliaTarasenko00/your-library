import { FC } from 'react';
import { resultRecommendBook } from '../../types/recommendBook';
import { Modal } from '../ui/modal/Modal';

interface BookDetailsProps {
  book: resultRecommendBook;
  closeModal: () => void;
}

export const BookDetails: FC<BookDetailsProps> = ({ book, closeModal }) => {
  return <Modal closeModal={closeModal}>{book?.author}</Modal>;
};
