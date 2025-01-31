import { FC, useState } from 'react';
import { useToggleModal } from '../../helpers/useToggleModal';
import { BookDetails } from './BookDetails';
import { recommendBook, resultRecommendBook } from '../../types/recommendBook';

interface BooksMarkupProps {
  data: recommendBook | undefined;
}

export const BooksMarkup: FC<BooksMarkupProps> = ({ data }) => {
  const { open, onToggleModal } = useToggleModal();

  const [bookDetails, setBookDetails] = useState<resultRecommendBook | null>(
    null,
  );

  const onDetailsBook = (id: string) => {
    const book = data?.results.find(({ _id }) => _id === id);
    setBookDetails(book as resultRecommendBook);
    onToggleModal();
  };

  return (
    <>
      <ul className="grid grid-cols-2 justify-center gap-x-[8px] xs:gap-x-[21px] md:grid-cols-4 md:gap-x-[20px] md:gap-y-[27px] xl:grid-cols-5">
        {data?.results.map(({ _id, imageUrl, title, author }) => {
          const newTitle = `${title.slice(0, 22)}${title.length >= 22 ? '...' : ''}`;
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
      <BookDetails
        book={bookDetails as resultRecommendBook}
        closeModal={onToggleModal}
        isOpen={open}
      />
    </>
  );
};
