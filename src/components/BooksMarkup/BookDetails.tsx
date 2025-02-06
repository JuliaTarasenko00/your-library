import { FC, useMemo } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Modal } from '../ui/modal/Modal';
import { useAddBookToLibraryById } from './useAddBookToLibraryById';
import { toast } from 'sonner';
import { toastErrorStyle, toastSuccessStyle } from '../ui/toastStyle';
import { BookInformation } from './BooksMarkup';
import { useGetLibrary } from '../../pages/Library/useGetLibrary';
import img from '../../assets/img/image_not_found.jpg';
import { useNavigate } from 'react-router-dom';

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
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isPending } = useAddBookToLibraryById();
  const { data: library } = useGetLibrary();

  const image = book?.imageUrl !== null ? book?.imageUrl : img;

  const onAddToLibrary = () => {
    if (!book?._id) return;

    mutate(book._id, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['fetch/get_library'],
        });
        toast.success(`Your book is now in the library!`, {
          style: toastSuccessStyle,
        });
      },
      onError: (error: Error) => {
        toast.error(error.message, { style: toastErrorStyle });
      },
    });
  };

  const bookInLibrary = useMemo(
    () => library?.find(({ title }) => book?.title === title) ?? false,
    [library, book],
  );

  const item: BookInformation = bookInLibrary ? bookInLibrary : book;

  return (
    <>
      <Modal closeModal={closeModal} isOpen={isOpen}>
        {!!item && (
          <div className="flex max-w-[450px] flex-col items-center justify-center">
            <img
              src={image}
              alt={item.title}
              loading="lazy"
              width={153}
              height={233}
              className="mb-[16px] h-[213px] w-[140px] rounded-[8px] md:h-[233px] md:w-[153px]"
            />
            <p className="mb-[2px] text-[18px] font-bold leading-[18px] text-[#F9F9F9] md:text-[20px] md:leading-[20px]">
              {item.title}
            </p>
            <p className="mb-[4px] text-[12px] font-normal leading-[14px] text-[#686868] md:text-[14px] md:leading-[18px]">
              {item.author}
            </p>
            <p className="mb-[20px] text-[10px] leading-[12px] text-[#F9F9F9] md:mb-[32px]">
              {item.totalPages}
            </p>

            {bookInLibrary ? (
              <button
                type="button"
                onClick={() => {
                  navigate(`/reading/${item._id}`);
                  closeModal();
                }}
                className="transition-custom rounded-[30px] border border-[#F9F9F933] px-[24px] py-[12px] text-[14px] font-bold leading-[18px] text-[#F9F9F9] hover:border-[#F9F9F9] hover:bg-[#F9F9F9] hover:text-[#1F1F1F] focus:border-[#F9F9F9] focus:bg-[#F9F9F9] focus:text-[#1F1F1F] md:px-[28px] md:py-[14px] md:text-[16px]"
              >
                Start reading
              </button>
            ) : (
              <button
                type="button"
                onClick={onAddToLibrary}
                disabled={isPending}
                className="transition-custom rounded-[30px] border border-[#F9F9F933] px-[24px] py-[12px] text-[14px] font-bold leading-[18px] text-[#F9F9F9] hover:border-[#F9F9F9] hover:bg-[#F9F9F9] hover:text-[#1F1F1F] focus:border-[#F9F9F9] focus:bg-[#F9F9F9] focus:text-[#1F1F1F] md:px-[28px] md:py-[14px] md:text-[16px]"
              >
                Add to library
              </button>
            )}
          </div>
        )}
      </Modal>
    </>
  );
};
