import { FC, useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import { useToggleModal } from '../../helpers/useToggleModal';
import { BookDetails } from './BookDetails';
import { resultRecommendBook } from '../../types/recommendBook';
import { useLocation } from 'react-router-dom';
import { routes } from '../../helpers/path';

export type BookInformation = {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
};

interface BooksMarkupProps {
  data: Array<BookInformation> | undefined;
  onDeleteBookFromLibrary?: (
    ev: React.MouseEvent<HTMLButtonElement>,
    id: string,
  ) => void;
}

export const BooksMarkup: FC<BooksMarkupProps> = ({
  data,
  onDeleteBookFromLibrary,
}) => {
  const { open, onToggleModal } = useToggleModal();
  const [bookDetails, setBookDetails] = useState<resultRecommendBook | null>(
    null,
  );
  const { pathname } = useLocation();
  const myLibrary = pathname === routes.library;

  const onDetailsBook = (id: string) => {
    const book = data?.find(({ _id }) => _id === id);
    setBookDetails(book as resultRecommendBook);
    onToggleModal();
  };

  return (
    <>
      <ul className="grid grid-cols-2 justify-center gap-x-[8px] xs:gap-x-[21px] md:grid-cols-4 md:gap-x-[20px] md:gap-y-[27px] xl:grid-cols-5">
        {data?.map(({ _id, imageUrl, title, author }) => {
          const lengthTitle = myLibrary ? 11 : 22;
          const newTitle = `${title.slice(0, lengthTitle)}${title.length >= lengthTitle ? '...' : ''}`;
          return (
            <li
              key={_id}
              className="mx-auto mt-0 flex w-[120px] cursor-pointer flex-col xs:w-[137px]"
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
              <div
                className={`${myLibrary ? 'flex items-center justify-between gap-[5px]' : ''} flex-grow-[1]`}
              >
                <div>
                  <h2 className="mb-[2px] mt-[8px] text-[14px] font-bold leading-[18px] text-[#F9F9F9]">
                    {newTitle}
                  </h2>
                  <h4 className="text-[10px] font-normal leading-[12px] text-[#686868]">
                    {author}
                  </h4>
                </div>
                {myLibrary && (
                  <button
                    type="button"
                    onClick={(ev: React.MouseEvent<HTMLButtonElement>) => {
                      if (onDeleteBookFromLibrary)
                        onDeleteBookFromLibrary(ev, _id);
                    }}
                    className="flex h-[28px] w-[28px] min-w-[28px] items-center justify-center rounded-[14px] border-[1px] border-[#E8505033] bg-[#E850501A]"
                  >
                    <BiTrash className="h-[14px] w-[14px] text-[#E85050]" />
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <BookDetails
        book={bookDetails as BookInformation}
        closeModal={onToggleModal}
        isOpen={open}
      />
    </>
  );
};
