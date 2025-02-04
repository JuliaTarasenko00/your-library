import { FC } from 'react';
import { Modal } from '../ui/modal/Modal';
import { useAddBookToLibraryById } from './useAddBookToLibraryById';
import { toast } from 'sonner';
import { toastErrorStyle, toastSuccessStyle } from '../ui/toastStyle';
import { BookInformation } from './BooksMarkup';
import { useGetLibrary } from '../../pages/Library/useGetLibrary';

interface BookDetailsProps {
  book: BookInformation;
  closeModal: () => void;
  isOpen: boolean;
}

export const BookDetails: FC<BookDetailsProps> = ({
  book,
  closeModal,
  isOpen,
}) => {
  const { mutate } = useAddBookToLibraryById();
  const { data } = useGetLibrary();

  const bookInLibrary =
    data !== null &&
    book !== null &&
    data?.some(({ title }) => book.title === title);

  console.log(bookInLibrary);

  const onAddToLibrary = (id: string) => {
    mutate(id, {
      onSuccess: () => {
        toast.success(
          `Your book is now in the library! The joy knows no bounds and now you can start your training`,
          {
            style: toastSuccessStyle,
          },
        );
      },
      onError: (error: Error) => {
        toast.error(error.message, {
          style: toastErrorStyle,
        });
      },
    });
  };

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

          {bookInLibrary ? (
            <p>Start reading</p>
          ) : (
            <button
              type="button"
              onClick={() => onAddToLibrary(book._id)}
              className="transition-custom rounded-[30px] border-[1px] border-[#F9F9F933] px-[24px] py-[12px] text-[14px] font-bold leading-[18px] text-[#F9F9F9] hover:border-[#F9F9F9] hover:bg-[#F9F9F9] hover:text-[#1F1F1F] focus:border-[#F9F9F9] focus:bg-[#F9F9F9] focus:text-[#1F1F1F] md:px-[28px] md:py-[14px] md:text-[16px]"
            >
              Add to library
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};
